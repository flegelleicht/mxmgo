import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { LoginCredentials } from '../../types/login-credentials';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginMail') loginMailRef: ElementRef;
  @ViewChild('loginPass') loginPassRef: ElementRef;
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    
    let mail = this.loginMailRef.nativeElement.value;
    let pass = this.loginPassRef.nativeElement.value;
    console.info(`Logging in with ${mail}:${pass}`);
    let cred = new LoginCredentials(mail, pass);
    this.loginService.login(cred)
      .subscribe((resp) => {
        console.info(`Login ${resp.allowed ? 'succeeded' : 'failed'}`);
      });
  }
}
