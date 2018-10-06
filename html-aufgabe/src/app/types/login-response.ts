export class LoginResponse {
  constructor(allowed: boolean, token: string) {
    this.allowed = allowed;
    this.token = token;
  }
	allowed: boolean;
  token: string;
}
