import { Injectable } from '@angular/core';
import { AdminUser } from '../Model/admin-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //For validation
  private _url = "http://localhost:8080/api/users";

  private _url2 = "http://localhost:8080/api/user";

  constructor(private http : HttpClient) { }

  //user validation
  validateUser(user : AdminUser) : Observable<AdminUser>{
    return this.http.post<AdminUser>(this._url, user);
  }
  //user sign up
  registerUsers(user : AdminUser) : Observable<AdminUser>{
    return this.http.post<AdminUser>(this._url2, user);
  }
  //Getting all users
  getUsers() : Observable<AdminUser[]>{
    return this.http.get<AdminUser[]>(this._url2);
  }

  //Get user by username
  getUser(user : string) : Observable<AdminUser>{
    return this.http.get<AdminUser>(`${this._url2}/${user}`);
  }
}
