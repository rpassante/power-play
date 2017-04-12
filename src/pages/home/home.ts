import {Component, OnDestroy, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Team} from "../../models/team.model";
import { Subscription } from 'rxjs/Subscription';
import {TeamService} from "../../providers/team-service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit, OnDestroy{

  myTeams:Team[];
  selectedTeam:Team;
  subscription: Subscription;

  constructor(public teamService: TeamService, public authService:AuthService) {

  }

  ngOnInit(){

    this.subscription = this.teamService.teamsChanged
      .subscribe(
        (teams: Team[]) => {
          this.myTeams = teams;
          this.selectedTeam = (this.myTeams[0] as Team);
        }
      );
    this.myTeams = this.teamService.getMyTeams();

  }

  ionViewCanEnter(){
    return this.authService.isAuthenticated();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
