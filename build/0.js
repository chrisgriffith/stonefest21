webpackJsonp([0],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersPageModule", function() { return BeersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beers__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BeersPageModule = (function () {
    function BeersPageModule() {
    }
    return BeersPageModule;
}());
BeersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__beers__["a" /* BeersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__beers__["a" /* BeersPage */]),
        ],
    })
], BeersPageModule);

//# sourceMappingURL=beers.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_beers_beers__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeersPage = (function () {
    function BeersPage(navCtrl, navParams, beerProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.brewery = '';
        var theBrewery = navParams.get("brewery");
        this.brewery = theBrewery.name;
        beerProvider.getBeers(this.brewery).then(function (theFoundBeers) {
            _this.beers = theFoundBeers;
        });
    }
    BeersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeersPage');
    };
    BeersPage.prototype.beerSelected = function (theBeer) {
        if (theBeer.untappd !== '') {
            window.open(theBeer.untappd, '_system');
        }
        else {
            window.open('https://untappd.com/home', '_system');
        }
    };
    return BeersPage;
}());
BeersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-beers',template:/*ion-inline-start:"/Users/chris.griffith/Desktop/StoneFest21/src/pages/beers/beers.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{brewery}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n    <ion-item *ngFor="let beer of beers" (click)="beerSelected(beer)">\n      <ion-icon name="beer" item-start></ion-icon>\n      <h2>{{beer.beer}}</h2>\n      <p>{{beer.notes}}</p>\n      <p>{{beer.type}}</p>\n      \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chris.griffith/Desktop/StoneFest21/src/pages/beers/beers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_beers_beers__["a" /* BeersProvider */]])
], BeersPage);

//# sourceMappingURL=beers.js.map

/***/ })

});
//# sourceMappingURL=0.js.map