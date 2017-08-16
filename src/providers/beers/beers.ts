import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeersProvider {
  data: any = null;

  constructor(public http: Http) {
    console.log('Hello BeersProvider Provider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('assets/data.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getBeers(theBrewery: string) {
    return this.load().then(data => {

      let theBeers = data.filter (
        beer => {
          return beer.brewery == theBrewery;
        }
      )
      return theBeers;
    });
  }
}
