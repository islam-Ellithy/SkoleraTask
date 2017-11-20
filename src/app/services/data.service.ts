import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log("Inside Data services");
  }

  //This method return list of users
  getUsers(): Observable<User[]> {
    return this.http.
      get('https://api.github.com/users')
      .map(res => res.json());
  }

  getUserDetails(id: number): Observable<User> {
    return this.http.get('https://api.github.com/user/' + id)
      .map(res => res.json());
  }
}
