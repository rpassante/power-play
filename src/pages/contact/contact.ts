import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  aboutRoot = AboutPage;

  constructor() {

  }

}
