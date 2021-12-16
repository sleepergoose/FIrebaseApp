import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private _authService: AuthService,
    private _router: Router) {}

  register() {
   
  }
}
