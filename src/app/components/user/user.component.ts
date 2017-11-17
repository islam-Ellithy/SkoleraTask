import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}
