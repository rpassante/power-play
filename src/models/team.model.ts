export class Team{

  public coaches: object;
  public color: string;
  public division: string;
  public name: string;
  public players: object;
  public schedule: object;


  constructor(coaches: Object, color: string, division: string, name: string, players: Object, schedule: Object) {
    this.coaches = coaches;
    this.color = color;
    this.division = division;
    this.name = name;
    this.players = players;
    this.schedule = schedule;
  }
}