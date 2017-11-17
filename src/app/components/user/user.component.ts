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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }


  onUserClicked(user: User) {
    console.log("user clicked " + user.login);

  }
  onButtonClicked() {
    console.log("Button has been clicked");
  }
}