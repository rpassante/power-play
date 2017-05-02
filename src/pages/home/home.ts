import {Component, OnDestroy, OnInit} from '@angular/core';
import {Team} from "../../models/team.model";
import { Subscription } from 'rxjs/Subscription';
import {TeamService} from "../../providers/team-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit, OnDestroy{

  myTeams:Team[];
  selectedTeam:Team;
  subscription: Subscription;

  constructor(public teamService: TeamService) {

  }

  ngOnInit(){

  }

  ionViewCanEnter(){
    //return this.auth.isAuthenticated();
    return true;
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }



}
