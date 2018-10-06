export class LoginCredentials {
  constructor(mail: string, pass: string) {
    this.mail = mail;
    this.pass = pass;
  }
  mail: string;
  pass: string;
}
