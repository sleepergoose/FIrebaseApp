import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import {
  getAuth, 
  createUserWithEmailAndPassword,
  Auth,
  UserCredential,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import {
  FirebaseApp,
  initializeApp
} from 'firebase/app';

import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app = {} as FirebaseApp;
  auth = {} as Auth;

  constructor() {
    this.app = initializeApp(environment.firebaseConfig); 
    this.auth = getAuth(this.app);
  }

  signOut() {
    signOut(this.auth);
  }
  
  signInWithEmailAndPassword(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signInWithCustomToken(token: string): Observable<UserCredential> {
    return from(signInWithCustomToken(this.auth, token));
  }

  createUserWithEmailAndPassword(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
}
