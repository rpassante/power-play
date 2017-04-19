import {Component, OnInit, ViewChild} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from "firebase";
import { HomePage } from "../pages/home/home";
import {AuthProvider} from "../pages/auth/auth.service";
import {Nav, Platform} from 'ionic-angular';
import {SigninPage} from "../pages/auth/signin/signin.component";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;
  isAppInitialized: boolean = false;
  user: any;
  rootPage: any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public auth:AuthProvider) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(){

    this.auth.getUserData().subscribe(data => {
      if (!this.isAppInitialized) {
        this.isAppInitialized = true;
      }
      this.user = data;
      //SETUP Subscription for data
    }, err => {
      this.nav.push(SigninPage);
    });

  }
}
