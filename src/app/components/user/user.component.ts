import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import 'app/Classes/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;
  pageStart: number = 0;
  pageEnd: number = 48;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.dataService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
      this.selectedUser = users[0];
    });
  }

  onSelect(user: User) {
    this.selectedUser = user;
    console.log(user);
  }
  onUserClicked(user: User) {
    console.log("user clicked " + user.login);
  }

  nextData() {
    this.pageStart += 10; // Get the next 10 records
  }


  onButtonClicked() {
    console.log("Button has been clicked");
  }
}