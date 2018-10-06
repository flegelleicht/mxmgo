import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


import { UserService } from '../services/user.service';
import { LoginResponse } from '../types/login-response';
import { LoginCredentials } from '../types/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private userService: UserService) {}
  
  login(credentials: LoginCredentials): Observable<LoginResponse> {

    let response = new LoginResponse(false, '');

    return this.userService.findWithCredentials(credentials)
      .pipe(map(user => {
          if (user && credentials.pass === user.pass) {
            this.userService.setCurrentUser(user);
            response = new LoginResponse(true, `Math.random().toString(36).substr(2)`);
          }        
          return response;
        }
      ));
  }
  
  logout() {
    this.userService.setCurrentUser(null);
  }
}
