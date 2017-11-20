import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import 'app/Classes/user';
import { UserDetailComponent } from 'app/components/user-detail/user-detail.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;
  pageStart: number = 0;
  pageEnd: number = 10;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.dataService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
      if (this.users.length > 0)
        this.selectedUser = users[0];
    });
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }

  onUserClicked(user: User) {
    console.log("user clicked " + user.login);
  }

  nextData() {
    if (this.pageEnd <= this.users.length)
      this.pageEnd += 10; // Get the next 10 records
  }

}