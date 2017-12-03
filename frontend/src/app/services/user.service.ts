import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { User } from '../classes/user';
import { Orders } from '../classes/orders';

@Injectable()
export class UserService {
  private static api: string = 'http://localhost:4200/api/users';

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<User[]> {
    return this.http.get(UserService.api) as Observable<User[]>;
  }

  public getUser(id: number): Observable<User> {
    return this.http.get(UserService.api + '/' + id) as Observable<User>;
  }

  public delUserById(id: number): Observable<any> {
    return this.http.delete(UserService.api + '/' + id);
  }

  public getOrdersByUser(user: User): Observable<Orders[]> {
    return this.http.get('http://localhost:4200/api/orders/user/' + user.id) as Observable<Orders[]>;
  }
}
