import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import {
  getAuth, 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  Auth,
  UserCredential,
  User,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import {
  FirebaseApp,
  initializeApp
} from 'firebase/app';
import { Observable, of } from 'rxjs';

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
  
  signInWithEmailAndPassword(email: string, password: string): Observable<UserCredential | Error> {
    let result = {} as UserCredential | Error;

    signInWithEmailAndPassword(this.auth, email, password)
      .then(credentials => {
        result = credentials;
      })
      .catch(error => {
        result = error;
      });

      return of(result);
  }

  signInWithCustomToken(token: string): Observable<UserCredential | Error> {
    let result = {} as UserCredential | Error;

    signInWithCustomToken(this.auth, token)
      .then((credentials => {
        result = credentials;
      }))
      .catch(error => {
        result = error
      });

      return of(result);
  }

  createUserWithEmailAndPassword(email: string, password: string): Observable<UserCredential | Error> {
    let result = {} as UserCredential | Error;

    createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        result = result;
      })
      .catch((error) => {
        result = error;
      })

      return of(result);
  }

  onAuthStateChanged(): Observable<User | null> {
    let result = {} as User | null;

    onAuthStateChanged(this.auth, 
      user => {
        result = user;
      });

      return of(result);
  }
}
