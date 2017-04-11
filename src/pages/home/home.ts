import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppSettings } from '../../providers/app-settings'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  team:object;

  constructor(public navCtrl: NavController, public appSettings: AppSettings) {

  }

  getTeam():void{
    this.team = this.appSettings.getTeam();
  }

  ngOnInit(){
    this.getTeam()
  }

}
