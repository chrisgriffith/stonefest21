import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BeersProvider } from '../../providers/beers/beers';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-beers',
  templateUrl: 'beers.html',
})
export class BeersPage {
  brewery: string = '';
  beers: Array<any>;
  browser;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public plt: Platform, private iab: InAppBrowser,
    beerProvider: BeersProvider) {
    let theBrewery = navParams.get("brewery")

    if (theBrewery === undefined) {
      // this.brewery = 'Stone Brewery';
      this.navCtrl.setRoot(HomePage);
    } else {
      this.brewery = theBrewery.name;
    }

    beerProvider.getBeers(this.brewery).then(theFoundBeers => {
      this.beers = theFoundBeers;
    })
  }

  beerSelected(theBeer) {
    if (this.plt.is('cordova')) {
      if (theBeer.untappd !== '') {
        this.browser = this.iab.create(theBeer.untappd);
      } else {
        this.browser =this.iab.create('https://untappd.com/home');
      }
    } else {
      if (theBeer.untappd !== '') {
        window.open(theBeer.untappd, '_system');
      } else {
        window.open('https://untappd.com/home', '_system');
      }
    }
  }
}
