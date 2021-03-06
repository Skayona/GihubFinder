import { Component, Input } from '@angular/core';
import { IRepo } from '../models/repo';

@Component({
  selector: 'app-user-repo-item',
  templateUrl: './user-repo-item.component.html',
  styleUrls: ['./user-repo-item.component.scss']
})
export class UserRepoItemComponent {
  @Input() repo: IRepo;
}
