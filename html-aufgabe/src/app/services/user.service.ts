import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LoginCredentials } from '../types/login-credentials';
import { User } from '../types/user-info';

/**
 * Provides access to users
 *
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Represents the currently logged in user. Is null when nobody is logged in.
   **/
  currentUser: User = null;
  
  /**
   * Represents all the users known to our service
   **/
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
  
  /**
   * Tries to find a user in the database given some credentials.
   * 
   * @returns {Observable<User>} - The result of the „database“ access (since this might someday be a call to an external database, we'll have it be asynchronous from the start. Also, the angular guide recommends it.)
   **/
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
