import { Injectable } from '@angular/core';
import {User} from '../../interfaces/user';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  // user: User;
  user: Subject<User> = new Subject<User>();


  constructor() { }

  public storeUser(currentUser: User): void {
    // this.user = currentUser;
    this.user.next(currentUser);
  }
  //
  // public getCurrentUser(): User {
  //   return this.user;
  // }
}
