/**
 * Created by robpassante on 4/11/17.
 */

export class ScheduleItem {

  public date:string;
  public endTime:string;
  public startTime:string
  public type:string

  constructor (date:string, endTime:string, startTime:string, type:string){
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.type = type;
  }
}