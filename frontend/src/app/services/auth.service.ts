import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { LoginData } from '../models/login-data';
import { RegisterData } from '../models/register-data';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _firebase: FirebaseService) {
    this._firebase.onAuthStateChanged()
      .subscribe((user) => {
        if (user !== null) {
          console.log('User: ' + user.displayName);
        }
        else {
          console.log('Log out');
        }
      });
  }

  register(registerData: RegisterData) {
    // register via server
  }

  login(loginData: LoginData) {
    this._firebase.signInWithEmailAndPassword(loginData.email, loginData.password)
      .pipe(take(1))
      .subscribe();
  }
}
