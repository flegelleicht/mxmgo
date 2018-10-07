import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { LoginCredentials } from '../types/login-credentials';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
  
  it('should allow valid credentials', () => {
    const service: LoginService = TestBed.get(LoginService);
    let credentials = new LoginCredentials('testuser@t.de', 'test');
    service.login(credentials)
      .subscribe((response) => {
        expect(response.allowed).toBe(true)
      });
  });
  
  it('should reject invalid credentials', () => {
    const service: LoginService = TestBed.get(LoginService);
    let credentials = new LoginCredentials('invalid', 'credentials');
    service.login(credentials)
      .subscribe((response) => {
        expect(response.allowed).toBe(false)
      });
  });
});
