import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../../services/message.service';
import { LoginService } from '../../services/login.service';
import { LoginCredentials } from '../../types/login-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginMail') loginMailRef: ElementRef;
  @ViewChild('loginPass') loginPassRef: ElementRef;
  
  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {  }

  /**
  * Tries to log in a user.
  *
  * Uses ElementRefs to get values from input fields on call.
  * 
  * @param {Event} event - The native DOM Event
  * @returns {void} - Either navigates to '/home' on success or logs a message
  **/
  login(event): void {
    event.preventDefault();
    
    let mail = this.loginMailRef.nativeElement.value;
    let pass = this.loginPassRef.nativeElement.value;

    let cred = new LoginCredentials(mail, pass);
    this.loginService.login(cred)
      .subscribe((resp) => {
        if (resp.allowed) {
          this.router.navigateByUrl('/home');
        } else {
          this.messageService.add(`⚠ Login ungültig`);
        }
      });
  }
}
