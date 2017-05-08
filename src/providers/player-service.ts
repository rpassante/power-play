import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {AngularFire} from "angularfire2";
import {Player} from "../models/player.model";

/*
  Generated class for the PlayerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PlayerService {

  playerList:any[] = [];

  constructor(public af: AngularFire) {
    console.log('Hello PlayerService Provider');
  }

  getPlayersFromUser(playerList){

      const playerSubject = new Subject();
      const playerObservable = this.af.database.list('/players/', {
        query: {
          equalTo: playerSubject,
          orderByKey: true
        }
      });

      // subscribe to changes
      playerObservable.subscribe(player => {
        console.log(player);
        this.playerList.push(player);
      });

    for( let prop in playerList){
      // skip loop if the property is from prototype
      if(!playerList.hasOwnProperty(prop)) continue;

      if(playerList[prop] === true){
        console.log('calling next subject with id: ' + prop);
        playerSubject.next(prop);
      }
    }
  }

  addPlayer(){
    let p:Player = new Player(null,null,'Dominic','Passante',43);
    let list = this.af.database.list('/players').subscribe( players => {
      players.forEach(player =>{
        this.playerList.push(new Player(player.teams,player.users,player.firstName,player.lastName,player.jerseyNumber))
      });
    });
    console.log('players: ' + this.playerList);
    //playerList.push(p);
  }
}
