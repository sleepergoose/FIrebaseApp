import { Injectable } from '@angular/core';
import { InternalHttpService } from './internal-http.service';
import { Observable, take } from 'rxjs';
import { LoginData } from '../models/login-data';
import { RegisterData } from '../models/register-data';
import { FirebaseService } from './firebase.service';
import { AuthTokenData } from '../models/token-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _firebase: FirebaseService,
    private _http: InternalHttpService) {
  }

  register(registerData: RegisterData) : Observable<AuthTokenData> {
    return this._http.postRequest<AuthTokenData>('/api/Auth/register', registerData);
  }

  loginViaToken(token: string) {
    this._firebase.signInWithCustomToken(token)
      .pipe(take(1))
      .subscribe((cred) => {
        console.log(cred);
      });
  }

  login(loginData: LoginData) {
    this._firebase.signInWithEmailAndPassword(loginData.email, loginData.password)
      .pipe(take(1))
      .subscribe((result) => {
        console.log(result.user.displayName);
      });
  }

  signOut() {
    this._firebase.signOut();
  }
}
