import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {

  private team:object = {
    'name':null,
    'coach':{
      'firstName':null,
      'lastName':null,
      'email':null,
      'phone':null
    }
  };

  public getTeam = function ():object {
    this.team = {
      'name': 'Tsunami',
      'coach': {
        'firstName': 'Marc',
        'lastName': 'Cholnik',
        'email': 'sabremarc@hotmail.com',
        'phone': '8132987038'
      }
    };
    return this.team;
  };

  constructor() {
    console.log('Hello AppSettings Provider');
  }

}
