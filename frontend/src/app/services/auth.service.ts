import { Injectable } from '@angular/core';
import { InternalHttpService } from './internal-http.service';
import { Observable, ReplaySubject } from 'rxjs';
import { LoginData } from '../models/login-data';
import { RegisterData } from '../models/register-data';
import { FirebaseService } from './firebase.service';
import { AuthTokenData } from '../models/token-data';
import { User } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser = {} as User;

  authUser$ = new ReplaySubject<User>(1);
  isAuthentificated: boolean = false;

  constructor(
    private _firebase: FirebaseService,
    private _http: InternalHttpService) {
  }

  setAuthUser(user: User) {
    this._authUser = user;
    this.authUser$.next(this._authUser);
    this.isAuthentificated = true;
  }

  register(registerData: RegisterData) : Observable<AuthTokenData> {
    return this._http.postRequest<AuthTokenData>('/api/Auth/register', registerData);
  }

  loginViaToken(token: string) {
    return this._firebase.signInWithCustomToken(token);
  }

  login(loginData: LoginData) {
    return this._firebase.signInWithEmailAndPassword(loginData.email, loginData.password);
  }

  signOut() {
    this._firebase.signOut();
    this.isAuthentificated = false;
    this._authUser = {} as User;
    this.authUser$.next(this._authUser);
    this.authUser$.complete();
  }
}
