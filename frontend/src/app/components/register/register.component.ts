import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
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
}
