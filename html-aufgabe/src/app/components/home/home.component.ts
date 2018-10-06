import { Component, OnInit } from '@angular/core';

import { User } from '../../types/user-info';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = null;
  
  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

}
