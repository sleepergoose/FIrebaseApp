import { Component } from '@angular/core';
import { LoginData } from 'src/app/models/login-data';
import { AuthService } from 'src/app/services/auth.service';
import { InternalHttpService } from 'src/app/services/internal-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  
  constructor(
    private _authService: AuthService,
    private _http: InternalHttpService) {}

  login() {
    let loginData = {
      accessToken: '',
      email: this.email,
      firebaseId: '',
      password: this.password,
      userName: ''
    } as LoginData;

    this._authService.login(loginData);
  }
}
