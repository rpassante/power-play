/**
 * Created by robpassante on 4/11/17.
 */

export class Player {
  public teams:object;
  public users:object;
  public firstName: string;
  public lastName: string;
  public jerseyNumber: number;

  constructor(teams:object, users:object, firstName: string, lastName: string, jerseyNumber: number) {
    this.teams = teams;
    this.users = users;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jerseyNumber = jerseyNumber;
  }
}