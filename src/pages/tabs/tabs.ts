import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  scheduleRoot = SchedulePage;
  contactRoot = ContactPage;

  constructor() {

  }
}
