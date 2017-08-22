import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { BeersProvider } from '../providers/beers/beers';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, public beers: BeersProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      beers.load();
    });
  }
}

