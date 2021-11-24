import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { LoginData } from 'src/app/models/login-data';
import { RegisterData } from 'src/app/models/register-data';
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
    let register = {
      email: this.email,
      password: this.password,
      userName: this.name
    } as RegisterData;

    this._authService.register(register)
      .pipe(take(1))
      .subscribe((result) => {
        this._router.navigate(['../login']);
      });
  }

  login() {
    let login = {
      email: this.email,
      password: this.password
    } as LoginData;

    this._authService.login(login);
  }
}
