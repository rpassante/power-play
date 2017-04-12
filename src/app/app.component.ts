import {Component, OnInit} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from "firebase";
import {SigninComponent} from "../pages/auth/signin/signin.component";
import {Subscription} from "rxjs";
import {HomePage} from "../pages/home/home";
import {AuthService} from "../pages/auth/auth.service";
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage:any = SigninComponent;
  tokenSubscription: Subscription;
  homePage:any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public authService:AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA2qPFZGHFuipF_x-_NZQBo1tQf6z_ihNw",
      authDomain: "power-play-c4867.firebaseapp.com",
      databaseURL: "https://power-play-c4867.firebaseio.com",
      projectId: "power-play-c4867",
      storageBucket: "power-play-c4867.appspot.com",
      messagingSenderId: "506289568155"
    });

    this.tokenSubscription = this.authService.tokenChanged
      .subscribe(
        (token: string) => {
          if(this.authService.isAuthenticated()){
            console.log('User is already authenticated!');
          }
        }
      );

  }
}
