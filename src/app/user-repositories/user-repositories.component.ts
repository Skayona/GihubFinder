import { Component, Input } from '@angular/core';
import { IRepo } from '../models/repo';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.scss']
})
export class UserRepositoriesComponent {
  @Input() repos: IRepo[];

  constructor() {
    this.repos = [];
  }

}
