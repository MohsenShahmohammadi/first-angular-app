import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  userSelectedId?:string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.userSelectedId)!;
  }
  onSelectedUser(id: string) {
    this.userSelectedId=id;
  }
}
