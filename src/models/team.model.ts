import {Person} from "./person.model";
import {ScheduleItem} from "./scheduleItem.model";
import {User} from "./user.model";
import {Player} from "./player.model";

export class Team{

  public coaches: User[];
  public color: string;
  public division: string;
  public name: string;
  public players: Player[];
  public schedule: ScheduleItem[];

  constructor(coaches: User[],
              color: string,
              division: string,
              name: string,
              players: Player[],
              schedule: ScheduleItem[]){

    this.coaches = coaches;
    this.color = color;
    this.division = division;
    this.name = name;
    this.players = players;
    this.schedule = schedule;
  }
}