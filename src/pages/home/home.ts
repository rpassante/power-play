import {Component, OnDestroy, OnInit} from '@angular/core';
import {Team} from "../../models/team.model";
import { Subscription } from 'rxjs/Subscription';
import {TeamService} from "../../providers/team-service";
import {AuthProvider} from "../auth/auth.service";
import {NavController} from "ionic-angular";
import {SigninPage} from "../auth/signin/signin.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit, OnDestroy{

  myTeams:Team[];
  selectedTeam:Team;
  subscription: Subscription;

  constructor(public navCtrl:NavController, public teamService: TeamService, public auth:AuthProvider) {

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

  public logout(){
    this.auth.logout().subscribe(data => {
      this.navCtrl.push(SigninPage);
    }, err => {
      console.log(err);
    });
  }

}
