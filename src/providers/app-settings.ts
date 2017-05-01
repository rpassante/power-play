import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {AngularFire} from "angularfire2";

@Injectable()
export class AppSettings {

  private CURRENT_USER:User;
  private IS_ADMIN:boolean = false;

  constructor(public af:AngularFire) {
    console.log('Hello AppSettings Provider');
  }

  public getCurrentUser():User{
    return this.CURRENT_USER;
  }

  public setCurrentUser(user:User){
    this.CURRENT_USER = user;
    this.checkAdminStatus();
  }

  private checkAdminStatus(){
    if(this.CURRENT_USER.admin){
      this.af.database.object('/admins/'+this.CURRENT_USER.UID).subscribe(admin => {
        if(admin.$value  === true){
          this.IS_ADMIN = true;
        }
      });
    }
  }

}
