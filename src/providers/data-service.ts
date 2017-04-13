import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppSettings } from "./app-settings";
import {Team} from "../models/team.model";
import 'rxjs/Rx';
import {Subject} from "rxjs/Subject";
import {TeamService} from "./team-service";
import {AuthService} from "../pages/auth/auth.service";

@Injectable()
export class DataService

  constructor(public http: Http,
              public appSettings:AppSettings,
              public teamService:TeamService,
              public authService:AuthService) {
    console.log('Hello DataService Provider');
  }


  getTeams():any{
    let uri:string = this.appSettings.API_ENDPOINT+'/teams.json';
    this.http.get(uri)
      .map(
        (response: Response) => {
          const teams: Team[] = response.json();
          for (let team of teams) {
            console.log(team);
          }
          return teams;
        }
      )
      .subscribe(
        (teams: Team[]) => {
          this.teamService.setMyTeams(teams);
        }
      );
  };

}
