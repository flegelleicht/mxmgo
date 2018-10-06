import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LoginCredentials } from '../types/login-credentials';
import { User } from '../types/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User = null;
  users = [
    new User(
      "Hans Dampf", 
      "testuser@t.de", 
      "test",
      "assets/images/profiles/DV4zvRBC.png", 
      "Hallo, mein Name ist Hans."
    ),
  ];
  
  constructor() {  }
  
  findWithCredentials(credentials: LoginCredentials): Observable<User> {
    let user = this.users.find((u) => u.mail === credentials.mail);
    return of(user);
  }
  
  setCurrentUser(user: User) {
    this.currentUser = user;
  }
  
  getCurrentUser(){
    return this.currentUser;
  }
}
