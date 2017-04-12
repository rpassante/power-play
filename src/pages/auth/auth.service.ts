import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class AuthService {
  token: string;
  tokenChanged = new Subject<string>();

  constructor() {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.setToken(token)
            );
          return response;
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.setToken(token)
      );
    return this.token;
  }

  setToken(token:string){
    this.token = token;
    this.tokenChanged.next(this.token);
  }

  isAuthenticated() {
    return this.token != null;
  }
}
