import {PlayerAuthCode} from "./playerAuthCode.model";
/**
 * Created by robpassante on 4/11/17.
 */

export class User {
  $key:string;
  public UID:string;
  public admin:boolean
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;

  constructor($key:string, UID: string, admin: boolean, firstName: string, lastName: string, email: string, phone: string) {
    this.$key = $key;
    this.UID = UID;
    this.admin = admin;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }
}