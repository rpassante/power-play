/**
 * Created by robpassante on 4/22/17.
 */
import {Component, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";
import {AuthProvider} from "../auth/auth.service";
import {SigninPage} from "../auth/signin/signin.component";

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit {
  constructor(public navCtrl:NavController, public auth:AuthProvider) {
  }

  ngOnInit() {

  }

  public logout(){
    this.auth.logout().subscribe(data => {
      this.navCtrl.push(SigninPage);
    }, err => {
      console.log(err);
    });
  }
}