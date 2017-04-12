import { Injectable } from '@angular/core';
import {Team} from "../models/team.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TeamService {

  teamsChanged = new Subject<Team[]>();
  myTeams:Team[];

  constructor() {
    console.log('Hello TeamService Provider');
  }

  getMyTeams():Team[]{
    return this.myTeams;
  }

  setMyTeams(teams:Team[]){
    this.myTeams = teams;
    this.teamsChanged.next(teams);
  }



}
