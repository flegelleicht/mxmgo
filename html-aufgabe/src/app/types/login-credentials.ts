export class LoginCredentials {
  constructor(user: string, pass: string) {
    this.user = user;
    this.pass = pass;
  }
  user: string;
  pass: string;
}
