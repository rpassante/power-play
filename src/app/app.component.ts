import {Component, OnInit, ViewChild} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthProvider} from "../pages/auth/auth.service";
import {SigninPage} from "../pages/auth/signin/signin.component";
import {TabsPage} from "../pages/tabs/tabs";
import {LoadingOverlayService} from "../providers/loading-overlay-service";
import {Nav, Platform} from "ionic-angular";
import {UserService} from "../providers/user-service";
import {PlayerService} from "../providers/player-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;
  isAppInitialized: boolean = false;
  user: any;
  rootPage: any = TabsPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public loadingOverlayService: LoadingOverlayService,
              public auth:AuthProvider,
              public userProvider: UserService,
              public playerProvider:PlayerService) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(){
    this.loadingOverlayService.showLoaderOverlay();
    this.auth.getUserData().subscribe(data => {
      this.user = data;
      //SETUP Subscription for data
      this.userProvider.getUserData(this.user.$key).subscribe(userData => {
        console.log(userData);
        this.playerProvider.getPlayersFromUser(userData[0].players);
      })
    }, err => {
      this.nav.push(SigninPage);
    });

  }

  public logout(){
    this.auth.logout().subscribe(data => {
      this.nav.push(SigninPage);
    }, err => {
      console.log(err);
    });
  }

}
