import {Component, OnInit, ViewChild} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthProvider} from "../pages/auth/auth.service";
import {Nav, Platform} from 'ionic-angular';
import {SigninPage} from "../pages/auth/signin/signin.component";
import {TabsPage} from "../pages/tabs/tabs";
import {UserService} from "../providers/user-service";
import {User} from "../models/user.model";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;
  isAppInitialized: boolean = false;
  user: User;
  rootPage: any = TabsPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public auth:AuthProvider,
              public userProvider:UserService) {

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
      this.userProvider.getUserData(this.user.$key).subscribe(userData => {

      })
    }, err => {
      this.nav.push(SigninPage);
    });

  }
}
