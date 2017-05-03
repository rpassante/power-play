/**
 * Created by robpassante on 4/11/17.
 */

export class Coach {
  public $key:string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public teams: object;


  constructor($key: string, firstName: string, lastName: string, email: string, phone: string, teams: Object) {
    this.$key = $key;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.teams = teams;
  }
}