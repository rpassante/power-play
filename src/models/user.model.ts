/**
 * Created by robpassante on 4/11/17.
 */

export class User {
  public $key:string;
  public UID:string;
  public admin:boolean;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public players: object;

  constructor($key:string, UID: string, admin: boolean, firstName: string, lastName: string, email: string, phone: string, players:object) {
    this.$key = $key;
    this.UID = UID;
    this.admin = admin;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.players = players;
  }
}