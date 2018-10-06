import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LoginResponse } from '../types/login-response';
import { LoginCredentials } from '../types/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  accounts = [{ user: 'test', pass: 'test' }];
  
  constructor() {}
  
  login(credentials: LoginCredentials): Observable<LoginResponse> {
    let response = new LoginResponse(false, '');

    let user = this.accounts.find(u => u.user === credentials.user);
    if (user && credentials.pass === user.pass) {
      response = new LoginResponse(true, `Math.random().toString(36).substr(2)`);
    }
    
    return of(response);
  }
}
