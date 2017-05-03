/**
 * Created by robpassante on 4/11/17.
 */

export class ScheduleItem {

  public teams:object;
  public startDate:string;
  public endDate:string;
  public type:string;


  constructor(teams: Object, startDate: string, endDate: string, type: string) {
    this.teams = teams;
    this.startDate = startDate;
    this.endDate = endDate;
    this.type = type;
  }
}