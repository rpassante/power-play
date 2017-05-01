import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SchedulePage } from '../pages/schedule/schedule';
import { TabsPage } from '../pages/tabs/tabs';

import { AppSettings } from '../providers/app-settings';
import { DataProvider } from "../providers/data-service";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";
import {TeamService} from "../providers/team-service";
import {AuthProvider} from "../pages/auth/auth.service";
import {SigninPage} from "../pages/auth/signin/signin.component";
import {SignupPage} from "../pages/auth/signup/signup.component";
import {AngularFire, AngularFireModule} from "angularfire2";
import {UserService} from "../providers/user-service";

export const firebaseConfig = {
  apiKey: "AIzaSyA2qPFZGHFuipF_x-_NZQBo1tQf6z_ihNw",
  authDomain: "power-play-c4867.firebaseapp.com",
  databaseURL: "https://power-play-c4867.firebaseio.com",
  projectId: "power-play-c4867",
  storageBucket: "power-play-c4867.appspot.com",
  messagingSenderId: "506289568155"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SchedulePage,
    TabsPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SchedulePage,
    TabsPage,
    SigninPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppSettings,
    DataProvider,
    TeamService,
    AuthProvider,
    AngularFire,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
