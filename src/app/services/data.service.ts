import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log("Inside Data services");
  }

  //This method return list of users
  getUsers() {
    return this.http.get('https://api.github.com/users')
      .map(res => res.json());
  }

  getUserDetails(id: number) {
    return this.http.get('https://api.github.com/user/' + id)
      .map(res => res.json());
  }
}
