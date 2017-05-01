/**
 * Created by robpassante on 4/11/17.
 */

export class Player {
  public firstName: string;
  public lastName: string;
  public jerseyNumber: number;
  public authCode: string;

  constructor(firstName: string, lastName: string, jerseyNumber: number, authCode: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jerseyNumber = jerseyNumber;
    this.authCode = authCode;
  }
}