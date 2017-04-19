import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthProvider } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupPage implements OnInit {

  constructor(private authService: AuthProvider) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {

  }

}
