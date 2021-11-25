import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { LoginData } from 'src/app/models/login-data';
import { AuthService } from 'src/app/services/auth.service';

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
    private _router: Router) {}

  login() {
    let loginData = {
      email: this.email,
      password: this.password
    } as LoginData;

    this._authService.login(loginData)
      .pipe(take(1))
      .subscribe(credentials => {
        this._authService.setAuthUser(credentials.user);
        this._router.navigate(['../main'])
      });
  }
}
