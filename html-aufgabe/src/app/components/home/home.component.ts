import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, LOGIN } from '../../app.state';
import { User } from '../../types/user-info';

import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cu$: Observable<User>;
  user: User = null;
  
  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private router: Router,
    private store: Store<AppState>)
  { 
    this.cu$ = store.pipe(
      select('app'), 
      map(state => state.currentUser));
  }

  /**
   * Redirects to '/login' if there's no logged-in user
   **/ 
  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    if (!this.user) {
      this.router.navigateByUrl('/login');
    }
  }
  
  login() {
    console.info(`login!`);
    this.store.dispatch({ type: LOGIN });
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
}
