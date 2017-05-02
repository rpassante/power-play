import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  private users_ref = this.af.database.list('users').$ref.ref;

  constructor(private af: AngularFire) {
    console.log('Hello UserService Provider');
  }

  public loadInitialData(UID:string){
    return Observable.create(observer => {
      this.af.database.list('users').then(userData => {
        observer.next(userData);
      }, error => {
        observer.error(error);
      });
    });
  }

}
