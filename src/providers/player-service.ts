import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {AngularFire} from "angularfire2";

/*
  Generated class for the PlayerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PlayerService {

  constructor(public af: AngularFire) {
    console.log('Hello PlayerService Provider');
  }

  getPlayersFromUser(playerList){

      const playerSubject = new Subject();
      const playerObservable = this.af.database.list('/players/', {
        query: {
          equalTo: playerSubject
        }
      });

      // subscribe to changes
      playerObservable.subscribe(players => {
        console.log(players);
      });

    for( let prop in playerList){
      // skip loop if the property is from prototype
      if(!playerList.hasOwnProperty(prop)) continue;

      if(playerList[prop] === true){
        playerSubject.next(prop);
      }
    }
  }

}
