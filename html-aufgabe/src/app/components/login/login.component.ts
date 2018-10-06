import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
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

  login(event) {
    event.preventDefault();
    
    let mail = this.loginMailRef.nativeElement.value;
    let pass = this.loginPassRef.nativeElement.value;

    let cred = new LoginCredentials(mail, pass);
    this.loginService.login(cred)
      .subscribe((resp) => {
        if (resp.allowed) {
          this.router.navigateByUrl('/home');
        } else {
          this.messageService.add(`Login ungültig`);
        }
      });
  }
}
