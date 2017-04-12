/**
 * Created by robpassante on 4/11/17.
 */

export class Person {
  public firstName: string;
  public lastName: string;
  public phone: string;
  public email: string;
  public jerseyNumber: number;
  public isCoach: boolean;

  constructor(firstName: string, lastName: string, phone: string, email: string, jerseyNumber: number, isCoach: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.jerseyNumber = jerseyNumber;
    this.isCoach = isCoach;
  }
}