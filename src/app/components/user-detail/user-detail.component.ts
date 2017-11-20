import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import 'app/Classes/user';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;


  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.dataService.getUserDetails(id)
      .subscribe((user) => {
        console.log(user);
        this.user = user
      });
  }

}
