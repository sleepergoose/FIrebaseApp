import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  }
}
