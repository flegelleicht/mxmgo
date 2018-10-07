import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../types/user-info';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = null;
  
  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private router: Router) { }

  /**
   * Redirects to '/login' if there's no logged-in user
   **/ 
  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    if (!this.user) {
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
}
