import { Component, OnInit } from '@angular/core';
import { GithubFinderService } from '../services/github-finder.service';
import { IUser } from '../models/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: IUser;
  error: boolean;
  errorMessage: string;

  constructor(
    private finderService: GithubFinderService
  ) {
    this.error = false;
  }

  ngOnInit() {
    this.finderService.getUser('Skayona')
    .then((user: IUser) => {
      this.error = false;
      this.errorMessage = '';
      this.user = user;
    })
    .catch((message) => {
      this.error = true;
      this.errorMessage = message;
      this.user = null;
    });
  }

}
