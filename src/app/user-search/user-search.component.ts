import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  username: string;
  timeOut: NodeJS.Timer;

  @Input() error: boolean;
  @Input() errorMessage: string;
  @Output() searchUser = new EventEmitter<string>();

  onChange() {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      this.searchUser.emit(this.username);
    }, 800);
  }
}
