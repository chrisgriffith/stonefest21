import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeersProvider } from '../../providers/beers/beers';
@IonicPage()
@Component({
  selector: 'page-beers',
  templateUrl: 'beers.html',
})
export class BeersPage {
  brewery: string = '';
  beers: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, beerProvider: BeersProvider) {
    let theBrewery = navParams.get("brewery")
    this.brewery = theBrewery.name;

    beerProvider.getBeers(this.brewery).then(theFoundBeers => {
      this.beers = theFoundBeers;
    })

  }

  beerSelected(theBeer) {
    if (theBeer.untappd !== '') {
      window.open(theBeer.untappd, '_system');
    } else {
       window.open('https://untappd.com/home', '_system');
    }
  }
}
