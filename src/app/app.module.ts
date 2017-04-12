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
import { DataService } from "../providers/data-service";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";
import {TeamService} from "../providers/team-service";
import {AuthService} from "../pages/auth/auth.service";
import {SigninComponent} from "../pages/auth/signin/signin.component";
import {SignupComponent} from "../pages/auth/signup/signup.component";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SchedulePage,
    TabsPage,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SchedulePage,
    TabsPage,
    SigninComponent,
    SignupComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppSettings,
    DataService,
    TeamService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
