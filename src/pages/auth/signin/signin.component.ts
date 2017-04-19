import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../auth.service';
import {NavController, ViewController} from "ionic-angular";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninPage implements OnInit {

  constructor(private viewCtrl:ViewController, private nav:NavController, private auth: AuthProvider) { }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.auth.loginWithEmail(form.value).subscribe(data => {
      console.log(data);
      this.nav.popToRoot();
    }, err => {
      console.log(err);
    });
  }

}
