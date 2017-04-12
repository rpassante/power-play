import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {

  API_ENDPOINT = 'https://power-play-c4867.firebaseio.com';

  constructor() {
    console.log('Hello AppSettings Provider');
  }

}
