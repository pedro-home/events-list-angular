webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__(47);
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
    function HomePage(notifications, api, utils) {
        var _this = this;
        this.notifications = notifications;
        this.api = api;
        this.utils = utils;
        this.title = 'Events';
        this.categories = [
            {
                id: 'day',
                label: 'TODAY',
                restriction: function (date1, date2) { return _this.utils.inSameDay(date1, date2); }
            },
            {
                id: 'week',
                label: 'THIS WEEK',
                restriction: function (date1, date2) { return _this.utils.inSameWeek(date1, date2); }
            },
            {
                id: 'none',
                label: 'OTHER'
            }
        ];
    }
    HomePage.prototype.ngOnInit = function () {
        this.initComponents();
    };
    HomePage.prototype.initComponents = function () {
        var _this = this;
        var dateNow;
        var restrictFn;
        var idxData;
        var idxCat;
        var dataVal;
        var config;
        this.api.getEvents().subscribe(function (data) {
            data = data.json();
            dateNow = new Date();
            for (idxData = 0; idxData < data.length; idxData++) {
                dataVal = data[idxData];
                dataVal['dateTime'] = _this.utils.parseDate(dataVal['dateTime']);
                for (idxCat = 0; idxCat < _this.categories.length; idxCat++) {
                    config = _this.categories[idxCat];
                    if (!config['events']) {
                        config['events'] = [];
                    }
                    restrictFn = config['restriction'];
                    if (restrictFn ? restrictFn(dateNow, dataVal['dateTime']) : true) {
                        config['events'].push(dataVal);
                        break;
                    }
                }
            }
            _this.currCategories = _this.utils.clone(_this.categories);
        }, function (error) {
            var message = 'Unknown error';
            if (!(error.error instanceof ErrorEvent)) {
                message = 'API is not responding';
            }
            var alert = _this.notifications.create({
                message: message + "! Restart Application.",
                duration: 2000
            });
            alert.present(alert);
        });
    };
    HomePage.prototype.searchEvent = function (e) {
        var value = e.target.value;
        this.currCategories = this.utils.clone(this.categories);
        if (value && value.trim() !== '') {
            var idxCat = void 0;
            var idxEv = void 0;
            var events = void 0;
            for (idxCat = 0; idxCat < this.currCategories.length; idxCat++) {
                events = this.currCategories[idxCat]['events'];
                for (idxEv = 0; idxEv < events.length; idxEv++) {
                    if (!events[idxEv]['title'].toLowerCase().includes(value.toLowerCase())) {
                        events.splice(idxEv, 1);
                        idxEv--;
                    }
                }
            }
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\EventsList\events-list-angular\src\pages\home\home.page.html"*/`<ion-header no-border text-center>\n    <ion-navbar>\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar placeholder="Search event" (ionInput)="searchEvent($event)"></ion-searchbar>\n    <ion-grid class="grid-categories">\n        <ion-row *ngFor="let cat of currCategories;">\n            <ion-col>\n                <category [data]="cat"></category>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\EventsList\events-list-angular\src\pages\home\home.page.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.page.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventPage = (function () {
    function EventPage(navParams, utils) {
        this.navParams = navParams;
        this.utils = utils;
        this.data = navParams.data;
        // TODO: Add data to FIREBASE
        this.data['messages'] = [
            {
                author: 'Mr. Bean',
                photo: 'https://www.srbijadanas.com/sites/default/files/styles/full_article_image/public/a/t/2017/11/12/mister-bin.jpg',
                dateTime: this.utils.parseDate('27-04-2018 10:21:01'),
                comment: 'I went there yesterday!',
                attachment: {
                    image: 'http://jarviscity.com/wp-content/uploads/2014/08/mr-bean-middle-finger-scene.jpg',
                    title: 'TOP 10 Best Scenes of Mr. Bean',
                    description: 'These are the best moments of the wonderful man, Mr. Bean.',
                    provider: 'youtube'
                },
                feedback: {
                    highFives: 10,
                    comments: 2
                }
            },
            {
                author: 'Santa Claus',
                photo: 'https://vmcdn.ca/f/files/shared/holidays/christmas/santa-claus-adobestock.jpeg;w=630',
                dateTime: this.utils.parseDate('27-04-2018 10:21:20'),
                comment: '@Mr. Bean, you are a naughty boy!',
                feedback: {
                    highFives: 537,
                    comments: 284
                }
            }
        ];
    }
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"E:\EventsList\events-list-angular\src\pages\event\event.page.html"*/`<ion-header no-border text-center>\n    <ion-navbar [ngStyle]="{\'background-image\': \'url(\' + data.image + \')\'}">\n\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="event-details">\n    <div class="event-text">\n      <h1 ion-text>{{data.title}}</h1>\n      <p ion-text color="secondary">Public event - Hosted by TSH Amsterdam City</p>\n    </div>\n    <ion-grid class="grid-requirements">\n      <ion-row>\n          <ion-col col-1>\n              <ion-icon name="clock"></ion-icon>\n          </ion-col>\n          <ion-col>\n              <span ion-text>{{data.dateTime | amDateFormat:\'LLLL\'}}</span>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-1>\n              <ion-icon name="pin"></ion-icon>\n          </ion-col>\n          <ion-col>\n              <span ion-text>The Pool - The Student Hotel Amsterdam City</span>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-1>\n              <ion-icon name="speedometer"></ion-icon>\n          </ion-col>\n          <ion-col>\n              <span style="font-weight: bold;" ion-text>15 Going</span>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    <voters [data]="data.members" [maximumNumber]="7"></voters>\n    <div class="event-description">\n      <p>\n        In 1,5 hour we will explore Amsterdam on our bicycles, we\'ll show beautiful canals, hidden gems, and absol...<button color="dark" ion-button icon-end small clear>Show more<ion-icon name="arrow-down"></ion-icon></button>\n      </p>\n    </div>\n  </div>\n  <div class="comments-container">\n      <ion-textarea placeholder="Leave a message"></ion-textarea>\n      <message *ngFor="let message of data.messages;" [data]="message"></message>\n  </div>\n</ion-content>\n`/*ion-inline-end:"E:\EventsList\events-list-angular\src\pages\event\event.page.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.page.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event/event.page.module": [
		407,
		1
	],
	"../pages/home/home.page.module": [
		406,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService_1 = ApiService;
    ApiService.prototype.getEvents = function () {
        return this.http.get("" + ApiService_1.DATA_PATH, '{responseType: "text"}');
    };
    ApiService.DATA_PATH = 'https://tsh-app.firebaseio.com/events.json';
    ApiService = ApiService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
    var ApiService_1;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_moment__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_bindable_bindable_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_category_category_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_voters_voters_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_message_message_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home_page__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_event_event_page__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_api_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_utils_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// TODO: Better importing system








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home_page__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_event_event_page__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_8__components_bindable_bindable_component__["a" /* BindableComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_voters_voters_component__["a" /* VotersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_message_message_component__["a" /* MessageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.page.module#HomePageModule', name: 'page-home', segment: 'home.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event/event.page.module#EventPageModule', name: 'page-event', segment: 'page-event/:id', priority: 'low', defaultHistory: ['page-home'] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_moment__["a" /* MomentModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home_page__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_event_event_page__["a" /* EventPage */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_15__services_utils_service__["a" /* UtilsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 158,
	"./af.js": 158,
	"./ar": 159,
	"./ar-dz": 160,
	"./ar-dz.js": 160,
	"./ar-kw": 161,
	"./ar-kw.js": 161,
	"./ar-ly": 162,
	"./ar-ly.js": 162,
	"./ar-ma": 163,
	"./ar-ma.js": 163,
	"./ar-sa": 164,
	"./ar-sa.js": 164,
	"./ar-tn": 165,
	"./ar-tn.js": 165,
	"./ar.js": 159,
	"./az": 166,
	"./az.js": 166,
	"./be": 167,
	"./be.js": 167,
	"./bg": 168,
	"./bg.js": 168,
	"./bm": 169,
	"./bm.js": 169,
	"./bn": 170,
	"./bn.js": 170,
	"./bo": 171,
	"./bo.js": 171,
	"./br": 172,
	"./br.js": 172,
	"./bs": 173,
	"./bs.js": 173,
	"./ca": 174,
	"./ca.js": 174,
	"./cs": 175,
	"./cs.js": 175,
	"./cv": 176,
	"./cv.js": 176,
	"./cy": 177,
	"./cy.js": 177,
	"./da": 178,
	"./da.js": 178,
	"./de": 179,
	"./de-at": 180,
	"./de-at.js": 180,
	"./de-ch": 181,
	"./de-ch.js": 181,
	"./de.js": 179,
	"./dv": 182,
	"./dv.js": 182,
	"./el": 183,
	"./el.js": 183,
	"./en-au": 184,
	"./en-au.js": 184,
	"./en-ca": 185,
	"./en-ca.js": 185,
	"./en-gb": 186,
	"./en-gb.js": 186,
	"./en-ie": 187,
	"./en-ie.js": 187,
	"./en-il": 188,
	"./en-il.js": 188,
	"./en-nz": 189,
	"./en-nz.js": 189,
	"./eo": 190,
	"./eo.js": 190,
	"./es": 191,
	"./es-do": 192,
	"./es-do.js": 192,
	"./es-us": 193,
	"./es-us.js": 193,
	"./es.js": 191,
	"./et": 194,
	"./et.js": 194,
	"./eu": 195,
	"./eu.js": 195,
	"./fa": 196,
	"./fa.js": 196,
	"./fi": 197,
	"./fi.js": 197,
	"./fo": 198,
	"./fo.js": 198,
	"./fr": 199,
	"./fr-ca": 200,
	"./fr-ca.js": 200,
	"./fr-ch": 201,
	"./fr-ch.js": 201,
	"./fr.js": 199,
	"./fy": 202,
	"./fy.js": 202,
	"./gd": 203,
	"./gd.js": 203,
	"./gl": 204,
	"./gl.js": 204,
	"./gom-latn": 205,
	"./gom-latn.js": 205,
	"./gu": 206,
	"./gu.js": 206,
	"./he": 207,
	"./he.js": 207,
	"./hi": 208,
	"./hi.js": 208,
	"./hr": 209,
	"./hr.js": 209,
	"./hu": 210,
	"./hu.js": 210,
	"./hy-am": 211,
	"./hy-am.js": 211,
	"./id": 212,
	"./id.js": 212,
	"./is": 213,
	"./is.js": 213,
	"./it": 214,
	"./it.js": 214,
	"./ja": 215,
	"./ja.js": 215,
	"./jv": 216,
	"./jv.js": 216,
	"./ka": 217,
	"./ka.js": 217,
	"./kk": 218,
	"./kk.js": 218,
	"./km": 219,
	"./km.js": 219,
	"./kn": 220,
	"./kn.js": 220,
	"./ko": 221,
	"./ko.js": 221,
	"./ky": 222,
	"./ky.js": 222,
	"./lb": 223,
	"./lb.js": 223,
	"./lo": 224,
	"./lo.js": 224,
	"./lt": 225,
	"./lt.js": 225,
	"./lv": 226,
	"./lv.js": 226,
	"./me": 227,
	"./me.js": 227,
	"./mi": 228,
	"./mi.js": 228,
	"./mk": 229,
	"./mk.js": 229,
	"./ml": 230,
	"./ml.js": 230,
	"./mn": 231,
	"./mn.js": 231,
	"./mr": 232,
	"./mr.js": 232,
	"./ms": 233,
	"./ms-my": 234,
	"./ms-my.js": 234,
	"./ms.js": 233,
	"./mt": 235,
	"./mt.js": 235,
	"./my": 236,
	"./my.js": 236,
	"./nb": 237,
	"./nb.js": 237,
	"./ne": 238,
	"./ne.js": 238,
	"./nl": 239,
	"./nl-be": 240,
	"./nl-be.js": 240,
	"./nl.js": 239,
	"./nn": 241,
	"./nn.js": 241,
	"./pa-in": 242,
	"./pa-in.js": 242,
	"./pl": 243,
	"./pl.js": 243,
	"./pt": 244,
	"./pt-br": 245,
	"./pt-br.js": 245,
	"./pt.js": 244,
	"./ro": 246,
	"./ro.js": 246,
	"./ru": 247,
	"./ru.js": 247,
	"./sd": 248,
	"./sd.js": 248,
	"./se": 249,
	"./se.js": 249,
	"./si": 250,
	"./si.js": 250,
	"./sk": 251,
	"./sk.js": 251,
	"./sl": 252,
	"./sl.js": 252,
	"./sq": 253,
	"./sq.js": 253,
	"./sr": 254,
	"./sr-cyrl": 255,
	"./sr-cyrl.js": 255,
	"./sr.js": 254,
	"./ss": 256,
	"./ss.js": 256,
	"./sv": 257,
	"./sv.js": 257,
	"./sw": 258,
	"./sw.js": 258,
	"./ta": 259,
	"./ta.js": 259,
	"./te": 260,
	"./te.js": 260,
	"./tet": 261,
	"./tet.js": 261,
	"./tg": 262,
	"./tg.js": 262,
	"./th": 263,
	"./th.js": 263,
	"./tl-ph": 264,
	"./tl-ph.js": 264,
	"./tlh": 265,
	"./tlh.js": 265,
	"./tr": 266,
	"./tr.js": 266,
	"./tzl": 267,
	"./tzl.js": 267,
	"./tzm": 268,
	"./tzm-latn": 269,
	"./tzm-latn.js": 269,
	"./tzm.js": 268,
	"./ug-cn": 270,
	"./ug-cn.js": 270,
	"./uk": 271,
	"./uk.js": 271,
	"./ur": 272,
	"./ur.js": 272,
	"./uz": 273,
	"./uz-latn": 274,
	"./uz-latn.js": 274,
	"./uz.js": 273,
	"./vi": 275,
	"./vi.js": 275,
	"./x-pseudo": 276,
	"./x-pseudo.js": 276,
	"./yo": 277,
	"./yo.js": 277,
	"./zh-cn": 278,
	"./zh-cn.js": 278,
	"./zh-hk": 279,
	"./zh-hk.js": 279,
	"./zh-tw": 280,
	"./zh-tw.js": 280
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 375;

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: '<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bindable_bindable_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_event_event_page__ = __webpack_require__(103);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = (function (_super) {
    __extends(CategoryComponent, _super);
    function CategoryComponent(navCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.activeStatusConfig = [
            {
                type: 'going',
                color: 'primary',
                label: 'Going',
                icon: 'checkmark'
            },
            {
                type: 'ignore',
                color: 'danger',
                label: 'Ignore',
                icon: 'close'
            }
        ];
        return _this;
    }
    CategoryComponent.prototype.changeStatus = function (id, activeStatus, status) {
        var nextStatus;
        switch (status) {
            case 'ignore':
            case 'going':
                nextStatus = 'none';
                break;
            case 'none':
                nextStatus = activeStatus;
        }
        this.data.events.find(function (val) { return val.id === id; })
            .status = nextStatus;
    };
    CategoryComponent.prototype.goToDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_event_event_page__["a" /* EventPage */], this.data.events.find(function (val) { return val.id === id; }));
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'category',template:/*ion-inline-start:"E:\EventsList\events-list-angular\src\components\category\category.component.html"*/`<div class="category-title">\n\n    <h5 ion-text>{{data.label}}</h5>\n\n</div>\n\n<ion-grid class="grid-overviews">\n\n    <ion-row *ngFor="let overview of data.events;">\n\n        <ion-col col-4 col-xl-3>\n\n            <div class="overview-image" [ngStyle]="{\'background-image\': \'url(\' + overview.image + \')\'}">\n\n                <h1 ion-text>{{overview.dateTime | amDateFormat:\'DD\'}}</h1>\n\n                <h4 ion-text>{{overview.dateTime | amDateFormat:\'MMM\'}}.</h4>\n\n            </div>\n\n        </ion-col>\n\n        <ion-col>\n\n            <div class="overview-event">\n\n                <div class="overview-text">\n\n                    <h5 ion-text (click)="goToDetails(overview.id)">{{overview.title}}</h5>\n\n                    <p ion-text color="secondary">{{overview.dateTime | amCalendar}}</p>\n\n                </div>\n\n                <voters [maximumNumber]="3" [simple]="true" [data]="overview.members"></voters>\n\n                <div class="overview-buttons">\n\n                    <div *ngFor="let status of activeStatusConfig;" class="overview-button">\n\n                        <button *ngIf="overview.status === \'none\' || overview.status === status.type" (click)="changeStatus(overview.id, status.type, overview.status)" color="{{overview.status === status.type ? status.color : \'secondary\'}}" ion-button icon-start small>\n\n                            <ion-icon *ngIf="overview.status === status.type" name="{{status.icon}}"></ion-icon>\n\n                            <span>{{status.label}}</span>\n\n                        </button> \n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-grid>`/*ion-inline-end:"E:\EventsList\events-list-angular\src\components\category\category.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], CategoryComponent);
    return CategoryComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bindable_bindable_component__["a" /* BindableComponent */]));

//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bindable_bindable_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service__ = __webpack_require__(47);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VotersComponent = (function (_super) {
    __extends(VotersComponent, _super);
    function VotersComponent(utils) {
        var _this = _super.call(this) || this;
        _this.utils = utils;
        _this.missNumber = 0;
        _this.simpleStyling = false;
        // TODO: Calculate maxNumber through available space
        _this.maxNumber = 10;
        return _this;
    }
    VotersComponent.prototype.ngOnInit = function () {
        this.limitVoters();
    };
    VotersComponent.prototype.limitVoters = function () {
        this.missNumber = this.data.length - this.maxNumber;
        this.data = this.utils.clone(this.data).slice(0, this.maxNumber);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('maximumNumber'),
        __metadata("design:type", Number)
    ], VotersComponent.prototype, "maxNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('simple'),
        __metadata("design:type", Boolean)
    ], VotersComponent.prototype, "simpleStyling", void 0);
    VotersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'voters',template:/*ion-inline-start:"E:\EventsList\events-list-angular\src\components\voters\voters.component.html"*/`<ion-avatar *ngFor="let voter of data;">\n\n    <img src="{{voter.photo}}"/>\n\n</ion-avatar>\n\n<ng-template [ngIf]="missNumber > 0">\n\n    <ng-template *ngIf="!simpleStyling; then normalTemplate; else simpleTemplate">\n\n    </ng-template>\n\n</ng-template>\n\n\n\n<ng-template #normalTemplate>\n\n    <ion-avatar>\n\n        <div class="other-container">\n\n           <span ion-text>+{{missNumber}}</span>\n\n        </div>\n\n    </ion-avatar>\n\n</ng-template>\n\n\n\n<ng-template #simpleTemplate>\n\n    <span ion-text>+{{missNumber}} others</span>\n\n</ng-template>`/*ion-inline-end:"E:\EventsList\events-list-angular\src\components\voters\voters.component.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]])
    ], VotersComponent);
    return VotersComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bindable_bindable_component__["a" /* BindableComponent */]));

//# sourceMappingURL=voters.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bindable_bindable_component__ = __webpack_require__(52);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageComponent = (function (_super) {
    __extends(MessageComponent, _super);
    function MessageComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'message',template:/*ion-inline-start:"E:\EventsList\events-list-angular\src\components\message\message.component.html"*/`<ion-card>\n\n    <div class="message-author">\n\n        <ion-row>\n\n            <ion-col col-auto>\n\n                <img src="{{data.photo}}" />\n\n            </ion-col>\n\n            <ion-col>\n\n                <h2><span style="font-weight: bold;">{{data.author}}</span> {{(data.attachment ? \' shared a link.\' : \'\')}}</h2>\n\n                <span ion-text color="secondary"><ion-icon name="clock"></ion-icon>{{data.dateTime | amTimeAgo}}</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n    \n\n    <ion-card-content>\n\n        <p class="message-comment">{{data.comment}}</p>\n\n        <div *ngIf="data.attachment" [class.message-attachment]="data.attachment">\n\n            <img src="{{data.attachment.image}}">\n\n            <h1 ion-text>{{data.attachment.title}}</h1>\n\n            <p ion-text>{{data.attachment.description}}</p>\n\n            <p ion-text color="secondary">{{data.attachment.provider}}</p>\n\n        </div>\n\n        <div class="message-feedback">\n\n            <span ion-text color="secondary" class="feedback-highfive">\n\n                <ion-icon name="thumbs-up"></ion-icon>\n\n                {{data.feedback.highFives}}\n\n            </span>\n\n            <span ion-text color="secondary" class="feedback-comment">\n\n                <ion-icon name="text"></ion-icon>\n\n                {{data.feedback.comments}}\n\n            </span>\n\n        </div>\n\n    </ion-card-content>\n\n    \n\n    <div class="message-buttons">\n\n        <ion-row>\n\n            <ion-col>\n\n            <button color="secondary" ion-button icon-start clear small>\n\n                <ion-icon name="thumbs-up"></ion-icon>\n\n                <span>High Five</span>\n\n            </button>\n\n            </ion-col>\n\n            <ion-col>\n\n            <button color="secondary" ion-button icon-start clear small>\n\n                <ion-icon name="text"></ion-icon>\n\n                <span>Comment</span>\n\n            </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-card>`/*ion-inline-end:"E:\EventsList\events-list-angular\src\components\message\message.component.html"*/
        })
    ], MessageComponent);
    return MessageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bindable_bindable_component__["a" /* BindableComponent */]));

//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService.prototype.parseDate = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()(date, format || 'DD-MM-YYYY HH:mm:ss').toDate();
    };
    UtilsService.prototype.inSameDay = function (date1, date2) {
        return this.inSameMonth(date1, date2) &&
            date1.getDate() === date2.getDate();
    };
    UtilsService.prototype.inSameMonth = function (date1, date2) {
        return this.inSameYear(date1, date2) &&
            date1.getMonth() === date2.getMonth();
    };
    UtilsService.prototype.inSameYear = function (date1, date2) {
        return date1.getFullYear() === date2.getFullYear();
    };
    UtilsService.prototype.inSameWeek = function (date1, date2) {
        var dayWeek = date1.getDay();
        dayWeek = dayWeek === 0 ? 7 : dayWeek;
        var dayMonth1 = date1.getDate();
        var dayMonth2 = date2.getDate();
        return this.inSameMonth(date1, date2) &&
            dayMonth2 >= dayMonth1 - dayWeek &&
            dayMonth2 <= dayMonth1 + dayWeek;
    };
    UtilsService.prototype.clone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    UtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UtilsService);
    return UtilsService;
}());

//# sourceMappingURL=utils.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BindableComponent = (function () {
    function BindableComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('data'),
        __metadata("design:type", Object)
    ], BindableComponent.prototype, "data", void 0);
    BindableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bindable',
            template: '<div>Bindable component</div>'
        }),
        __metadata("design:paramtypes", [])
    ], BindableComponent);
    return BindableComponent;
}());

//# sourceMappingURL=bindable.component.js.map

/***/ })

},[324]);
//# sourceMappingURL=main.js.map