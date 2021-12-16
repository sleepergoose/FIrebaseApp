import { Injectable } from '@angular/core';
import { InternalHttpService } from './internal-http.service';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _firebase: FirebaseService,
    private _http: InternalHttpService) {
  }
}
