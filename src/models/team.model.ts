import {Person} from "./person.model";
import {ScheduleItem} from "./scheduleItem.model";

export class Team{

  public coaches: Person[];
  public color: string;
  public division: string;
  public name: string;
  public players: Person[]
  public schedule: ScheduleItem[]

  constructor(coaches: Person[],
              color: string,
              division: string,
              name: string,
              players: Person[],
              schedule: ScheduleItem[]){

    this.coaches = coaches;
    this.color = color;
    this.division = division;
    this.name = name;
    this.players = players;
    this.schedule = schedule;
  }
}