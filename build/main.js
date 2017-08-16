webpackJsonp([1],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/beers/beers.module": [
		264,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.breweries = [{ name: "Stone Brewery", logo: "brewery-1204_23541.jpg" },
            { name: "Stone Brewing World Bistro & Gardens - Liberty Station", logo: "brewery-1204_23541.jpg" },
            { name: "21st Amendment Brewery", logo: "brewery-4339_203d1.jpg" },
            { name: "Abnormal Beer Company", logo: "brewery-194089_a617b.jpg" },
            { name: "AleSmith Brewing Company", logo: "brewery-2471_6bfa2.jpg" },
            { name: "Arrogant Brewing", logo: "brewery-234399_0c2d9.jpg" },
            { name: "Avery Brewing Co", logo: "brewery-avery.jpg" },
            { name: "Bagby Beer Company", logo: "brewery-154817_958eb.jpg" },
            { name: "Bay City Brewing Company", logo: "brewery-220274_a8d47.jpg" },
            { name: "Beachwood Brewing", logo: "brewery-7901_05617.jpg" },
            { name: "Bear Republic Brewing Company", logo: "brewery-bearrepublicbrewingco_94.jpg" },
            { name: "Bear Roots Brewing Co", logo: "brewery-185521_6563a.jpg" },
            { name: "Bitter Brothers Brewing Co", logo: "brewery-160331_923a4.jpg" },
            { name: "Boochcraft", logo: "brewery-259324_02d70.jpg" },
            { name: "Bottle Logic Brewing", logo: "brewery-bottlelogicbrewing_94408.jpg" },
            { name: "Boulevard Brewing Co", logo: "brewery-1514_2003e.jpg" },
            { name: "Brewery Ommegang", logo: "brewery-249_20027.jpg" },
            { name: "The Bruery", logo: "brewery-thebruery_1246.jpg" },
            { name: "Bruery Terreux", logo: "brewery-214845_85cbe.jpg" },
            { name: "Burgeon Beer Company", logo: "brewery-306680_3dd20.jpg" },
            { name: "Devil's Canyon Brewing Company", logo: "brewery-devilscanyonbrewingco_1729.jpg" },
            { name: "Drake's Brewery", logo: "brewery-464_df7ef.jpg" },
            { name: "Eel River Brewing Company", logo: "brewery-481_a4b15.jpg" },
            { name: "El Segundo Brewing", logo: "brewery-11688_fbaaa.jpg" },
            { name: "Fall Brewing Company", logo: "brewery-169664_7c413.jpg" },
            { name: "Firestone Walker Brewing Co", logo: "brewery-524_e835d.jpg" },
            { name: "Fremont Brewing", logo: "brewery-FremontBrewingCompany_1508.jpg" },
            { name: "Garage Project", logo: "brewery-GarageProject_14539.jpg" },
            { name: "Great Divide Brewing Company", logo: "brewery-604_621e5.jpg" },
            { name: "Kern River Brewing Company", logo: "brewery-KernRiverBrewingCompany_1498.jpg" },
            { name: "Knee Deep Brewing Co", logo: "brewery-kneedeepbrewingcompany_2445.jpg" },
            { name: "Lord Hobo Brewing Co", logo: "brewery-199369_a536c.jpg" },
            { name: "The Lost Abbey", logo: "brewery-2712_0b00a.jpg" },
            { name: "MadeWest Brewing Company", logo: "brewery-174542_99051.jpg" },
            { name: "Magnolia Brewing Company", logo: "brewery-magnoliapubandbrewery_813.jpg" },
            { name: "Mammoth Brewing Company", logo: "brewery-MammothBrewingCompany_2687.jpg" },
            { name: "Mason Ale Works", logo: "brewery-246213_66d0a.jpg" },
            { name: "Maui Brewing Co", logo: "brewery-836_fd28d.jpg" },
            { name: "Mike Hess Brewing Co", logo: "brewery-hessbrewing_2174.jpg" },
            { name: "Mikkeller Brewing San Diego", logo: "brewery-264526_5b732.jpg" },
            { name: "Monkey Paw Brewing Company", logo: "brewery-19972_36a45.jpg" },
            { name: "Mother Earth Brew Co.", logo: "brewery-5092_b0a8b.jpg" },
            { name: "Newtopia Cyder", logo: "brewery-321399_8833c.jpg" },
            { name: "Noble Ale Works", logo: "brewery-6377_180b1.jpg" },
            { name: "Oceanside Ale Works", logo: "brewery-2266_64153.jpg" },
            { name: "Oskar Blues Brewery", logo: "brewery-oskarBlues.jpg" },
            { name: "Phantom Carriage Brewery", logo: "brewery-48094_260b4.jpg" },
            { name: "Pizza Port Brewing Co", logo: "brewery-1534_f0f6d.jpg" },
            { name: "Pure Project Brewing", logo: "brewery-248508_f9a3a.jpg" },
            { name: "Refuge Brewery", logo: "brewery-43908_bdd8e.jpg" },
            { name: "Rip Current Brewing Company", logo: "brewery-45616_09ff5.jpg" },
            { name: "Russian River Brewing Company", logo: "brewery-russianRiver.jpg" },
            { name: "Second Chance Beer Company", logo: "brewery-215181_050f3.jpg" },
            { name: "Sierra Nevada Brewing Co", logo: "brewery-1142_f241d.jpg" },
            { name: "Ska Brewing Company", logo: "brewery-SkaBrewingCompany_1150.jpg" },
            { name: "Smog City Brewing Co", logo: "brewery-SmogCity_16185.jpg" },
            { name: "Societe Brewing Company", logo: "brewery-29606_f27cc.jpg" },
            { name: "South Park Brewing Company", logo: "brewery-189064_91df9.jpg" },
            { name: "St. Mayhem Craft Wine Cooler", logo: "brewery_bg_88.png" },
            { name: "Three Weavers Brewing Company", logo: "brewery-147846_6f16f.jpg" },
            { name: "Victory Brewing Company", logo: "brewery-1326_6ca88.jpg" },
            { name: "Wandering Aengus Ciderworks", logo: "brewery-wanderingaengusciderworks_4475.jpg" }];
    }
    HomePage.prototype.brewerySelected = function (theBrewery) {
        this.navCtrl.push("BeersPage", { brewery: theBrewery });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/chris.griffith/Desktop/StoneFest21/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Stone Fest 21\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let brewery of breweries" (click)="brewerySelected(brewery)" detail-push>\n      <ion-thumbnail item-start>\n        <img src="assets/breweries/{{brewery.logo}}">\n      </ion-thumbnail>\n      <h2>{{brewery.name}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/chris.griffith/Desktop/StoneFest21/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_beers_beers__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/beers/beers.module#BeersPageModule', name: 'BeersPage', segment: 'beers', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_beers_beers__["a" /* BeersProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_beers_beers__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, beers) {
        this.beers = beers;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            beers.load();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chris.griffith/Desktop/StoneFest21/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chris.griffith/Desktop/StoneFest21/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_beers_beers__["a" /* BeersProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeersProvider = (function () {
    function BeersProvider(http) {
        this.http = http;
        this.data = null;
        console.log('Hello BeersProvider Provider');
    }
    BeersProvider.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('assets/data.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    BeersProvider.prototype.getBeers = function (theBrewery) {
        return this.load().then(function (data) {
            var theBeers = data.filter(function (beer) {
                return beer.brewery == theBrewery;
            });
            return theBeers;
        });
    };
    return BeersProvider;
}());
BeersProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], BeersProvider);

//# sourceMappingURL=beers.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map