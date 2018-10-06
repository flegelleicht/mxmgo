export class User {
  constructor(fullName, mail, pass, imagePath, shoutout) {
    this.imagePath = imagePath;
    this.fullName = fullName;
    this.mail = mail;
    this.pass = pass;
    this.shoutout = shoutout;
  }
  mail: string;
  pass: string;
  fullName: string;
  imagePath: string;
  shoutout: string;
}
