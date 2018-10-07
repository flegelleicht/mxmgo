import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


import { UserService } from '../services/user.service';
import { LoginResponse } from '../types/login-response';
import { LoginCredentials } from '../types/login-credentials';

/**
 * Provides functionality related to user authentication.
 *
 * Might also have been named AuthenticationService... but wasn't. Uses the 
 * injected @UserService to retrieve a user and validates the login attempt
 *
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private userService: UserService) {}
  
  /**
   * Authenticates the given {@link LoginCredentials}
   * 
   * @param {LoginCredentials} credentials - The credentials of a login attempt
   * @returns {Observable<LoginResponse>} - A response that either rejects the
   * attempt or allows it (and then maybe includes a session token for future
   * authorisation purposes)
   **/
  login(credentials: LoginCredentials): Observable<LoginResponse> {

    let response = new LoginResponse(false, '');

    return this.userService.findWithCredentials(credentials)
      // Since findWithCredentials returns an Observable<T_1> and we want to 
      // return another Observable<T_2> we have to @pipe@ the 
      // result from findWithCredentials to @map@ to transform it
      .pipe(map(user => {
          if (user && credentials.pass === user.pass) {
            this.userService.setCurrentUser(user);
            response = new LoginResponse(true, '');
          }        
          return response;
        }
      ));
  }
  
  logout() {
    this.userService.setCurrentUser(null);
  }
}
