import { Component } from '@angular/core';
import { GithubFinderService } from '../services/github-finder.service';
import { IUser } from '../models/user';
import { IRepo } from '../models/repo';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  user: IUser;
  repos: IRepo[];
  error: boolean;
  errorMessage: string;

  constructor(
    private finderService: GithubFinderService
  ) {
    this.error = false;
  }

  searchUser(username: string) {
    this.finderService.getUser(username)
      .then((user: IUser) => {
        this.error = false;
        this.errorMessage = '';
        this.user = user;
        this.getReposList(username);
      })
      .catch((message) => {
        this.error = true;
        this.errorMessage = message;
        this.user = null;
      });
  }

  getReposList(username: string) {
    this.finderService.getReposList(username)
    .then((repos: IRepo[]) => {
      this.repos = repos;
    })
    .catch((message) => {
      console.error(message);
    });
  }

}
