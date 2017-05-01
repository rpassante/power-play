import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {AppSettings} from "./app-settings";
import {User} from "../models/user.model";

@Injectable()
export class UserService {

  private currentUser:FirebaseListObservable<any>;

  constructor(public af:AngularFire, public appSettings:AppSettings) {
    console.log('Hello UserService Provider');
  }

  public getUserData(UID:string):FirebaseListObservable<any>{
    this.currentUser = this.af.database.list('/users',{
      query:{
        orderByChild: 'UID',
        equalTo: UID
      }
    });

    this.currentUser.subscribe( userData => {
      this.appSettings.setCurrentUser(userData[0]);
    });

    return this.currentUser;
  }

}
