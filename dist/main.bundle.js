webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Extra small devices (phones, less than 768px) */\n/* No media query since this is the default in Bootstrap */\n\n:host{\n  /*margin-bottom: 5vh;*/\n  display: block;\n}\nheader{\n  height: 25vh;\n  padding: 2vh;\n  overflow: hidden;\n  background-position: center bottom;\n  background: #1e70cd;\n  background: radial-gradient(ellipse at 0% 0%,#2c8dfb 0%,#1e70cd 50%);\n  box-sizing: border-box;\n  position: relative;\n  color: #fff;\n}\nheader h1{\n  font-weight: 100;\n  color: white;\n  font-size: 4.5vh;\n}\n\nheader h2{\n  letter-spacing: 2px;\n  font-size: 2vh;\n  color: white;\n}\nheader ng-adsense{\n  display: none;\n}\nheader .content-icon{\n  /*display: inline-block;*/\n  width: auto;\n  height: 100%;\n  padding: 4vh;\n\n}\nheader img.icon{\n  height: 50%;\n}\n\nheader .social-bar a{\n  margin-right: 1vh;\n}\nnav.menu{\n  background-color: #1976d2;\n}\nnav.menu .button-menu{\n  color: white;\n  font-size: 2vh;\n  padding: 1.3vh;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 0;\n}\nnav.menu .button-menu.active{\n  color: #1976d2;\n  background-color: white;\n}\n\nheader,\nheader .social-bar,\nnav.menu{\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\nheader .social-bar{\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\nfooter{\n  color: white;\n  margin-top: 3vh;\n  background-color: #1976d2;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 3vh 0vh;\n}\nfooter div{\n  font-size: 2vh ;\n  text-align: center;\n}\n.content{\n  padding: 2vh;\n}\n.content-icon{\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.forkme{\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: none;\n  width: 15vh;\n}\n\n\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  header img.icon{\n    height: 75%;\n  }\n  header h1{\n    font-size: 5vh;\n  }\n  nav.menu .button-menu{\n    font-size: 1.7vh;\n  }\n  footer div{\n    font-size: 1.7vh ;\n  }\n  .forkme{\n    display: block;\n  }\n}\n\n/* Medium devices (desktops, 992px and up) */\n@media (min-width: 992px) {\n\n  header h2{\n    font-size: 2.2vh;\n  }\n  header .social-bar img{\n    height: 2.2vh;\n    width: auto;\n  }\n  .content-icon .icon{\n    height: 75%;\n  }\n  .forkme{\n    width: 17vh;\n  }\n}\n\n/* Large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n  header ng-adsense{\n    display: block;\n  }\n  .forkme{\n    width: 19.5vh;\n  }\n}\n\n\n@media (min-width: 1600px) {\n  footer div,\n  nav.menu .button-menu{\n    font-size: 1.7vh;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <div class=\"content-icon\">\n    <img class=\"icon\" src=\"assets/img/icon.png\">\n  </div>\n  <div class=\"content-title\">\n    <h1>angular2-carousel</h1>\n    <h2>An lightweight , simple and touchable carousel library</h2>\n    <div class=\"social-bar\">\n      <a href=\"https://badge.fury.io/js/angular2-carousel\"><img src=\"https://badge.fury.io/js/angular2-carousel.svg\" alt=\"npm version\" height=\"18\"></a>\n      <a href=\"https://badge.fury.io/gh/kappys1%2Fangular2-carousel\"><img src=\"https://badge.fury.io/gh/kappys1%2Fangular2-carousel.svg\" alt=\"GitHub version\" height=\"18\"></a>\n      <a href=\"https://twitter.com/alexmarcosg\"><img src=\"https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=follow\" alt=\"Twitter\" height=\"18\"></a>\n    </div>\n  </div>\n  <div>\n    <ng-adsense\n      [adClient]=\"'ca-pub-3647075652313201'\"\n      [adSlot]=\"7259870550\"\n      [display]=\"'inline-block'\"\n      [width]=\"320\"\n      [height]=\"108\">\n    </ng-adsense>\n  </div>\n  <a href=\"https://github.com/kappys1/angular2-carousel\"><img class=\"forkme\" src=\"assets/img/forkme.png\"></a>\n</header>\n<nav class=\"menu\">\n  <a class=\"button-menu\" routerLink=\"/getStarted\"  routerLinkActive=\"active\">Get Started</a>\n  <a class=\"button-menu\" routerLink=\"/demo\"  routerLinkActive=\"active\">Demos</a>\n  <a class=\"button-menu\" routerLink=\"/api\"  routerLinkActive=\"active\">API</a>\n</nav>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n<footer>\n  <div>2017 © Angular 2 carousel by Alex Marcos from <a src=\"https://tmtfactory.com\">tmtfactory.com</a></div>\n</footer>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_carousel__ = __webpack_require__("../../../../angular2-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_simple_carousel_simple_carousel_component__ = __webpack_require__("../../../../../src/app/components/simple-carousel/simple-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_examples_examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_api_api_component__ = __webpack_require__("../../../../../src/app/pages/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_get_started_get_started_component__ = __webpack_require__("../../../../../src/app/pages/get-started/get-started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_properties_carousel_properties_carousel_component__ = __webpack_require__("../../../../../src/app/components/properties-carousel/properties-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_functions_carousel_functions_carousel_component__ = __webpack_require__("../../../../../src/app/components/functions-carousel/functions-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_pipe_safehtml__ = __webpack_require__("../../../../../src/app/pipes/pipe.safehtml.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cube_carousel_cube_carousel_component__ = __webpack_require__("../../../../../src/app/components/cube-carousel/cube-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_style_carousel_style_carousel_component__ = __webpack_require__("../../../../../src/app/components/style-carousel/style-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_adsense__ = __webpack_require__("../../../../ng2-adsense/ng2-adsense.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_autoplay_carousel_autoplay_carousel_component__ = __webpack_require__("../../../../../src/app/components/autoplay-carousel/autoplay-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_multiple_sliders_carousel_multiple_slider_carousel_component__ = __webpack_require__("../../../../../src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_simple_carousel_simple_carousel_component__["a" /* SimpleCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_examples_examples_component__["a" /* ExamplesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_api_api_component__["a" /* ApiComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_pipe_safehtml__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_9__pages_get_started_get_started_component__["a" /* GetStartedComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_properties_carousel_properties_carousel_component__["a" /* PropertiesCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_functions_carousel_functions_carousel_component__["a" /* FunctionsCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_cube_carousel_cube_carousel_component__["a" /* CubeCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_style_carousel_style_carousel_component__["a" /* StyleCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_autoplay_carousel_autoplay_carousel_component__["a" /* AutoplayCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_multiple_sliders_carousel_multiple_slider_carousel_component__["a" /* MultipleSliderCarouselComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_15_ng2_adsense__["a" /* AdsenseModule */].forRoot({
                    adClient: 'ca-pub-7640562161899788',
                    adSlot: 7259870550
                }),
                __WEBPACK_IMPORTED_MODULE_3_angular2_carousel__["b" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_examples_examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_get_started_get_started_component__ = __webpack_require__("../../../../../src/app/pages/get-started/get-started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_api_api_component__ = __webpack_require__("../../../../../src/app/pages/api/api.component.ts");



var appRoutes = [
    {
        path: 'demo',
        component: __WEBPACK_IMPORTED_MODULE_0__pages_examples_examples_component__["a" /* ExamplesComponent */],
        data: { title: 'Simple Carousel' }
    }, {
        path: 'getStarted',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_get_started_get_started_component__["a" /* GetStartedComponent */],
        data: { title: 'Simple Carousel' }
    }, {
        path: 'api',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_api_api_component__["a" /* ApiComponent */],
        data: { title: 'Simple Carousel' }
    },
    { path: '',
        redirectTo: '/getStarted',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__pages_get_started_get_started_component__["a" /* GetStartedComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/autoplay-carousel/autoplay-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host carousel-component{\n  border: 1px solid black;\n  display: block;\n  overflow: hidden;\n  padding: 8vh 6vh;\n  width: 75%;\n  margin: 0 auto;\n  margin-top: 2vh;\n}\n\n.button-toggle{\n  font-size: 1.8vh;\n  padding: 1vh;\n  margin-bottom: 1vh;\n}\nh1{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\n.item-carousel{\n  background-color: white;\n  display: -ms-flexbox!important;\n  display: -webkit-box!important;\n  display: flex!important;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 23vh!important;\n  height: 20vh!important;\n  top:0vh;\n}\n\n.item-carousel img{\n  height: 80%;\n  width: auto;\n}\n\n.parameter-option{\n  margin-right: 2vh;\n}\n.parameters-content{\n  font-size: 1.8vh;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.parameters-content button,\n.parameters-content select,\n.parameters-content input{\n  font-size: 1.5vh;\n}\np.show-code{\n  color: #ab2300;\n}\np{\n  font-size: 1.8vh;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel{\n  transition: all 500ms!important;\n}\n:host carousel-component.style-carousel.ready .item-carousel.actual{\n  height: 30vh!important;\n  top:-2.5vh;\n}\n\n:host carousel-component.cube-mode.ready >>> .container{\n  -webkit-perspective: 10vh!important;\n          perspective: 10vh!important;\n}\n\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  h1{\n    font-size: 2.5vh;\n  }\n  .button-toggle,\n  p{\n    font-size: 1.7vh;\n  }\n  .parameters-content {\n    font-size: 1.7vh;\n  }\n\n\n}\n\n\n/* Large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n  :host carousel-component{\n    width: 60%;\n  }\n  .item-carousel{\n    width: 28vh!important;\n    height: 25vh!important;\n  }\n  h1{\n    font-size: 2.7vh;\n  }\n  .button-toggle{\n    font-size: 1.6vh;\n  }\n\n}\n@media (min-width: 2000px) {\n  :host carousel-component.cube-mode.ready >>> .container{\n    -webkit-perspective: 15vh!important;\n            perspective: 15vh!important;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/autoplay-carousel/autoplay-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Auto Play example</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/autoplay-carousel\" target=\"_blank\">Source code</a></p>\n<p>In this example auto play don't stop never.</p>\n<button class=\"button-toggle\"(click)=\"toggle()\">Toggle Vertical / Horizontal Mode</button>\n<carousel-component [mode]=\"'horizontal'\" [autoPlay]=\"true\" #topCarousel>\n  <div class=\"item-carousel\"><img src=\"http://imagenesgraciosasparacelular.com/wp-content/uploads/2015/12/minions-imagenes-graciosas-4.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.ytimg.com/vi/C9d_dstzYOE/maxresdefault.jpg\"></div>\n</carousel-component>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/autoplay-carousel/autoplay-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoplayCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__ = __webpack_require__("../../../../angular2-carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoplayCarouselComponent = (function () {
    function AutoplayCarouselComponent() {
    }
    AutoplayCarouselComponent.prototype.toggle = function () {
        this.topCarousel.toggleMode();
    };
    AutoplayCarouselComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('topCarousel'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */]) === "function" && _a || Object)
    ], AutoplayCarouselComponent.prototype, "topCarousel", void 0);
    AutoplayCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-autoplay-carousel',
            template: __webpack_require__("../../../../../src/app/components/autoplay-carousel/autoplay-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/autoplay-carousel/autoplay-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AutoplayCarouselComponent);
    return AutoplayCarouselComponent;
    var _a;
}());

//# sourceMappingURL=autoplay-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cube-carousel/cube-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Cube example</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/cube-carousel\" target=\"_blank\">Source code</a></p>\n<p>Set perspective property to 200</p>\n<button class=\"button-toggle\"(click)=\"toggle()\">Toggle Vertical / Horizontal Mode</button>\n<carousel-component class=\"cube-mode\" [mode]=\"'horizontal'\" [perspective]=\"100\" #topCarousel>\n  <div class=\"item-carousel\"><img src=\"http://imagenesgraciosasparacelular.com/wp-content/uploads/2015/12/minions-imagenes-graciosas-4.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.ytimg.com/vi/C9d_dstzYOE/maxresdefault.jpg\"></div>\n</carousel-component>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/cube-carousel/cube-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CubeCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__ = __webpack_require__("../../../../angular2-carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CubeCarouselComponent = (function () {
    function CubeCarouselComponent() {
    }
    CubeCarouselComponent.prototype.toggle = function () {
        this.topCarousel.toggleMode();
    };
    CubeCarouselComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('topCarousel'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */]) === "function" && _a || Object)
    ], CubeCarouselComponent.prototype, "topCarousel", void 0);
    CubeCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cube-carousel',
            template: __webpack_require__("../../../../../src/app/components/cube-carousel/cube-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/simple-carousel/simple-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CubeCarouselComponent);
    return CubeCarouselComponent;
    var _a;
}());

//# sourceMappingURL=cube-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/functions-carousel/functions-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Functions Examples</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/functions-carousel\" target=\"_blank\">Source code</a></p>\n<p>Slide prev and slide next by functions. you can set your style</p>\n<p><b>Slide only works with buttons</b></p>\n<div class=\"parameters-content\">\n  <div class=\"parameter-option\">\n    <button (click)=\"prev()\">Prev</button>\n  </div>\n  <div class=\"parameter-option\">\n    <button (click)=\"next()\">Next</button>\n  </div>\n</div>\n\n\n<carousel-component [lockSlides]=\"true\" #topCarousel>\n  <div class=\"item-carousel\"><img src=\"http://imagenesgraciosasparacelular.com/wp-content/uploads/2015/12/minions-imagenes-graciosas-4.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.ytimg.com/vi/C9d_dstzYOE/maxresdefault.jpg\"></div>\n</carousel-component>\n"

/***/ }),

/***/ "../../../../../src/app/components/functions-carousel/functions-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionsCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__ = __webpack_require__("../../../../angular2-carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FunctionsCarouselComponent = (function () {
    function FunctionsCarouselComponent() {
    }
    FunctionsCarouselComponent.prototype.ngOnInit = function () {
    };
    FunctionsCarouselComponent.prototype.prev = function () {
        this.topCarousel.slidePrev();
    };
    FunctionsCarouselComponent.prototype.next = function () {
        this.topCarousel.slideNext();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('topCarousel'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */]) === "function" && _a || Object)
    ], FunctionsCarouselComponent.prototype, "topCarousel", void 0);
    FunctionsCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-functions-carousel',
            template: __webpack_require__("../../../../../src/app/components/functions-carousel/functions-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/simple-carousel/simple-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FunctionsCarouselComponent);
    return FunctionsCarouselComponent;
    var _a;
}());

//# sourceMappingURL=functions-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host carousel-component{\n  border: 1px solid black;\n  display: block;\n  overflow: hidden;\n  padding: 8vh 6vh;\n  width: 75%;\n  margin: 0 auto;\n  margin-top: 2vh;\n}\n\n.button-toggle{\n  font-size: 1.8vh;\n  padding: 1vh;\n  margin-bottom: 1vh;\n}\nh1{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\n.item-carousel{\n  background-color: white;\n  display: -ms-flexbox!important;\n  display: -webkit-box!important;\n  display: flex!important;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 23vh!important;\n  height: 20vh!important;\n  top:0vh;\n}\n\n.item-carousel img{\n  height: 80%;\n  width: auto;\n}\n\n.parameter-option{\n  margin-right: 2vh;\n}\n.parameters-content{\n  font-size: 1.8vh;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.parameters-content button,\n.parameters-content select,\n.parameters-content input{\n  font-size: 1.5vh;\n}\np.show-code{\n  color: #ab2300;\n}\np{\n  font-size: 1.8vh;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel{\n  transition: all 500ms!important;\n}\n:host carousel-component.style-carousel.ready .item-carousel.actual{\n  height: 30vh!important;\n  top:-2.5vh;\n}\n\n:host carousel-component.cube-mode.ready >>> .container{\n  -webkit-perspective: 10vh!important;\n          perspective: 10vh!important;\n}\n\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  h1{\n    font-size: 2.5vh;\n  }\n  .button-toggle,\n  p{\n    font-size: 1.7vh;\n  }\n  .parameters-content {\n    font-size: 1.7vh;\n  }\n\n\n}\n\n\n/* Large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n  :host carousel-component{\n    width: 60%;\n  }\n  .item-carousel{\n    width: 28vh!important;\n    height: 25vh!important;\n  }\n  h1{\n    font-size: 2.7vh;\n  }\n  .button-toggle{\n    font-size: 1.6vh;\n  }\n\n}\n@media (min-width: 2000px) {\n  :host carousel-component.cube-mode.ready >>> .container{\n    -webkit-perspective: 15vh!important;\n            perspective: 15vh!important;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Multiple Slides example</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/multiple-sliders-carousel\" target=\"_blank\">Source code</a></p>\n<button class=\"button-toggle\"(click)=\"toggle()\">Toggle Vertical / Horizontal Mode</button>\n<carousel-component [mode]=\"'horizontal'\" [morePairSlides]=\"moreSlides\" [angle]=\"degree\" #topCarousel>\n  <div class=\"item-carousel\"><img src=\"http://imagenesgraciosasparacelular.com/wp-content/uploads/2015/12/minions-imagenes-graciosas-4.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"http://monstersofswag.com/wp-content/uploads/despicable-me-3-gru-3.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"https://vignette.wikia.nocookie.net/p__/images/e/eb/Gru_close-up.png/revision/latest?cb=20160414233204&path-prefix=protagonist\"></div>\n  <div class=\"item-carousel\"><img src=\"https://www.losminionsaldia.com/images/mas-minions/minion.png\"></div>\n  <div class=\"item-carousel\"><img src=\"http://www.abc.net.au/news/image/6473316-1x1-700x700.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"https://vignette.wikia.nocookie.net/despicableme/images/0/06/Daveault2.png/revision/latest?cb=20130911160410\"></div>\n  <div class=\"item-carousel\"><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHYZ08mC8dAGbyTxuQxkn9fbxGuOclg7T98ZG_FVLftamqjSB\"></div>\n  <div class=\"item-carousel\"><img src=\"https://images.jg-cdn.com/image/854b86b4-61be-417a-b4ff-498b8baeedd0.jpg?template=fundraisingpagegalleryxl\"></div>\n  <div class=\"item-carousel\"><img src=\"https://vignette.wikia.nocookie.net/despicableme/images/4/4d/Daveault1.png/revision/latest?cb=20130911160355\"></div>\n</carousel-component>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleSliderCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__ = __webpack_require__("../../../../angular2-carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultipleSliderCarouselComponent = (function () {
    function MultipleSliderCarouselComponent() {
        this.degree = 25;
        this.moreSlides = 3;
    }
    MultipleSliderCarouselComponent.prototype.toggle = function () {
        this.topCarousel.toggleMode();
    };
    MultipleSliderCarouselComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('topCarousel'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */]) === "function" && _a || Object)
    ], MultipleSliderCarouselComponent.prototype, "topCarousel", void 0);
    MultipleSliderCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-multiple-slider-carousel',
            template: __webpack_require__("../../../../../src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultipleSliderCarouselComponent);
    return MultipleSliderCarouselComponent;
    var _a;
}());

//# sourceMappingURL=multiple-slider-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/properties-carousel/properties-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Properties Examples</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/properties-carousel\" target=\"_blank\">Source code</a></p>\n<p>The Perspective and Number of Initial Slide properties need reset the carousel for apply changes</p>\n<div class=\"parameters-content\">\n  <div class=\"parameter-option\">\n    <button (click)=\"reset()\">Reset</button>\n  </div>\n  <div class=\"parameter-option\">\n    <div>Mode</div>\n    <select [value]=\"mode\" (input)=\"mode = $event.target.value\">\n      <option value=\"vertical\">Vertical</option>\n      <option value=\"horizontal\">Horizontal</option>\n    </select>\n  </div>\n  <div class=\"parameter-option\">\n    <div>Time to slide</div>\n    <input type=\"number\" [value]=\"time\" (input)=\"time = $event.target.value\">\n  </div>\n  <div class=\"parameter-option\">\n    <div>Perspective</div>\n    <input type=\"number\" [value]=\"perspective\" (input)=\"perspective = $event.target.value\">\n  </div>\n  <div class=\"parameter-option\">\n    <div>Initial Slide</div>\n    <input type=\"number\" [value]=\"init\" (input)=\"init = $event.target.value\">\n  </div>\n</div>\n\n\n<carousel-component [mode]=\"mode\" [timeToSlide]=\"time\" [perspective]=\"perspective\" [initialSlide]=\"init\" #topCarousel>\n  <div class=\"item-carousel\"><img src=\"http://imagenesgraciosasparacelular.com/wp-content/uploads/2015/12/minions-imagenes-graciosas-4.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.ytimg.com/vi/C9d_dstzYOE/maxresdefault.jpg\"></div>\n</carousel-component>\n"

/***/ }),

/***/ "../../../../../src/app/components/properties-carousel/properties-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__ = __webpack_require__("../../../../angular2-carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertiesCarouselComponent = (function () {
    function PropertiesCarouselComponent() {
        this.time = 300;
        this.mode = 'horizontal';
        this.perspective = 2000;
        this.init = 0;
    }
    PropertiesCarouselComponent.prototype.ngOnInit = function () {
    };
    PropertiesCarouselComponent.prototype.ngOnChanges = function (sample) {
        console.log(sample);
    };
    PropertiesCarouselComponent.prototype.reset = function () {
        console.log("click", this);
        this.topCarousel.reInit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('topCarousel'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */]) === "function" && _a || Object)
    ], PropertiesCarouselComponent.prototype, "topCarousel", void 0);
    PropertiesCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-properties-carousel',
            template: __webpack_require__("../../../../../src/app/components/properties-carousel/properties-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/simple-carousel/simple-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertiesCarouselComponent);
    return PropertiesCarouselComponent;
    var _a;
}());

//# sourceMappingURL=properties-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/simple-carousel/simple-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host carousel-component{\n  border: 1px solid black;\n  display: block;\n  overflow: hidden;\n  padding: 8vh 6vh;\n  width: 75%;\n  margin: 0 auto;\n  margin-top: 2vh;\n}\n\n.button-toggle{\n  font-size: 1.8vh;\n  padding: 1vh;\n  margin-bottom: 1vh;\n}\nh1{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\n.item-carousel{\n  background-color: white;\n  display: -ms-flexbox!important;\n  display: -webkit-box!important;\n  display: flex!important;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 23vh!important;\n  height: 20vh!important;\n  top:0vh;\n}\n\n.item-carousel img{\n  height: 80%;\n  width: auto;\n}\n\n.parameter-option{\n  margin-right: 2vh;\n}\n.parameters-content{\n  font-size: 1.8vh;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.parameters-content button,\n.parameters-content select,\n.parameters-content input{\n  font-size: 1.5vh;\n}\np.show-code{\n  color: #ab2300;\n}\np{\n  font-size: 1.8vh;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel{\n  transition: all 500ms!important;\n}\n:host carousel-component.style-carousel.ready .item-carousel.actual{\n  height: 30vh!important;\n  top:-2.5vh;\n}\n\n:host carousel-component.cube-mode.ready >>> .container{\n  -webkit-perspective: 10vh!important;\n          perspective: 10vh!important;\n}\n\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  h1{\n    font-size: 2.5vh;\n  }\n  .button-toggle,\n  p{\n    font-size: 1.7vh;\n  }\n  .parameters-content {\n    font-size: 1.7vh;\n  }\n\n\n}\n\n\n/* Large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n  :host carousel-component{\n    width: 60%;\n  }\n  .item-carousel{\n    width: 28vh!important;\n    height: 25vh!important;\n  }\n  h1{\n    font-size: 2.7vh;\n  }\n  .button-toggle{\n    font-size: 1.6vh;\n  }\n\n}\n@media (min-width: 2000px) {\n  :host carousel-component.cube-mode.ready >>> .container{\n    -webkit-perspective: 15vh!important;\n            perspective: 15vh!important;\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/simple-carousel/simple-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Simple example</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/simple-carousel\" target=\"_blank\">Source code</a></p>\n<button class=\"button-toggle\"(click)=\"toggle()\">Toggle Vertical / Horizontal Mode</button>\n<carousel-component [mode]=\"'horizontal'\" [timeToSlide]=\"300\" #topCarousel>\n  <div class=\"item-carousel\"><img src=\"http://imagenesgraciosasparacelular.com/wp-content/uploads/2015/12/minions-imagenes-graciosas-4.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.ytimg.com/vi/C9d_dstzYOE/maxresdefault.jpg\"></div>\n</carousel-component>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/simple-carousel/simple-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__ = __webpack_require__("../../../../angular2-carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleCarouselComponent = (function () {
    function SimpleCarouselComponent() {
    }
    SimpleCarouselComponent.prototype.toggle = function () {
        this.topCarousel.toggleMode();
    };
    SimpleCarouselComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('topCarousel'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_carousel__["a" /* CarouselComponent */]) === "function" && _a || Object)
    ], SimpleCarouselComponent.prototype, "topCarousel", void 0);
    SimpleCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple-carousel',
            template: __webpack_require__("../../../../../src/app/components/simple-carousel/simple-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/simple-carousel/simple-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleCarouselComponent);
    return SimpleCarouselComponent;
    var _a;
}());

//# sourceMappingURL=simple-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/style-carousel/style-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Style example</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/style-carousel\" target=\"_blank\">Source code</a></p>\n<p>You can set your style, for example the actual slide</p>\n<carousel-component class=\"style-carousel\">\n  <div class=\"item-carousel\"><img src=\"http://imagenesgraciosasparacelular.com/wp-content/uploads/2015/12/minions-imagenes-graciosas-4.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg\"></div>\n  <div class=\"item-carousel\"><img src=\"https://i.ytimg.com/vi/C9d_dstzYOE/maxresdefault.jpg\"></div>\n</carousel-component>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/style-carousel/style-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StyleCarouselComponent = (function () {
    function StyleCarouselComponent() {
    }
    StyleCarouselComponent.prototype.ngOnInit = function () {
    };
    StyleCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-style-carousel',
            template: __webpack_require__("../../../../../src/app/components/style-carousel/style-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/simple-carousel/simple-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StyleCarouselComponent);
    return StyleCarouselComponent;
}());

//# sourceMappingURL=style-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/api/api.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n  font-size: 5vh;\n  font-weight: 200;\n}\n\nh2{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\nh3{\n  font-size: 2vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\np{\n  font-size: 1.8vh;\n}\ntable{\n  width: 100%;\n  font-size: 1.8vh;\n  border-collapse: collapse;\n  border-spacing: 0;\n  color: #555;\n}\ntable, th, td {\n  border: 1px solid #555;\n}\nth, td {\n  padding: 1vh;\n}\n.example-title{\n  cursor: pointer;\n}\n.content-example{\n  opacity: 0;\n  height: 0vh;\n  overflow: hidden;\n  visibility: hidden;\n  transition: opacity 300ms, height 300ms;\n}\n.content-example.show{\n  opacity: 1;\n  visibility: visible;\n  height: auto;\n}\n.code{\n  font-size: 1.8vh;\n}\n\n/* Extra small devices (phones, less than 768px) */\n/* No media query since this is the default in Bootstrap */\n\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  h1{\n    font-size: 4.5vh;\n  }\n  h2{\n    font-size: 2.5vh;\n  }\n  .code,\n  p{\n    font-size: 1.7vh;\n  }\n  table{\n    width: 95%;\n    font-size: 1.7vh;\n  }\n}\n\n/* Medium devices (desktops, 992px and up) */\n@media (min-width: 992px) {\n  table{\n    width: 70%;\n    font-size: 1.7vh;\n  }\n}\n\n/* Large devices (large desktops, 1200px and up) */\n@media (min-width: 1600px) {\n  table{\n    width: 70%;\n    font-size: 1.5vh;\n  }\n  .code,\n  p{\n    font-size: 1.5vh;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/api/api.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Carousel Api</h1>\n<h2>Inputs (Properties)</h2>\n<table>\n  <thead>\n  <tr>\n    <th>Parameter</th>\n    <th>Type</th>\n    <th>Default</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>morePairSlides</td>\n    <td>number</td>\n    <td>1</td>\n    <td>Add slide carousel in both sides</td>\n  </tr>\n  <tr>\n    <td>angle</td>\n    <td>number</td>\n    <td>45</td>\n    <td>Angle to distribute the carousel</td>\n  </tr>\n  <tr>\n    <td>ratioScale</td>\n    <td>number</td>\n    <td>1</td>\n    <td>Carousel scale ratio</td>\n  </tr>\n  <tr>\n    <td>margin</td>\n    <td>number</td>\n    <td>0</td>\n    <td>Margin to separate between carousel slides</td>\n  </tr>\n  <tr>\n    <td>perspective</td>\n    <td>number</td>\n    <td>2000</td>\n    <td>Perspective to show the carousel slide</td>\n  </tr>\n  <tr>\n    <td>timeToSlide</td>\n    <td>number</td>\n    <td>300</td>\n    <td>Time (in ms) to transalte to carousel slide if transition isn't complete</td>\n  </tr>\n  <tr>\n    <td>lockSlides</td>\n    <td>boolean</td>\n    <td>false</td>\n    <td>Block the swiping</td>\n  </tr>\n  <tr>\n    <td>initialSlide</td>\n    <td>number</td>\n    <td>0</td>\n    <td>Index number on initial carrousel</td>\n  </tr>\n  <tr>\n    <td>mode</td>\n    <td>string</td>\n    <td>\"horizontal\"</td>\n    <td>Can you init carousel in 'horizontal' or 'vertical' mode</td>\n  </tr>\n  </tbody>\n</table>\n<h3 class=\"example-title\"(click)=\"showParameterExample = !showParameterExample\">example (show/hide)</h3>\n\n<div class=\"content-example {{showParameterExample?'show':''}}\">\n  <h3>Template:</h3>\n  <p>example to use input parameters to init carousel component with 30 angle.</p>\n  <p><i>note : you can use a variable to set angle.</i></p>\n  <pre>\n      <div class=\"code hljs ruby\" [innerHTML]=\"parameterHtml | safeHtml\">\n\n      </div>\n  </pre>\n  <p><a href=\"https://embed.plnkr.co/oQzPhfdxzPZ4ejg2OYQr/\">Example Plnkr</a></p>\n\n</div>\n<h2>Outputs (Events)</h2>\n<p><i>All events return the carousel by argument on callback function, in table you can see what event return carousel only or event too</i></p>\n<table>\n  <thead>\n  <tr>\n    <th>Event</th>\n    <th>argument</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>onInit</td>\n    <td>carousel</td>\n    <td>Event will carousel component initialize</td>\n  </tr>\n  <tr>\n    <td>onReady</td>\n    <td>carousel</td>\n    <td>Event will carousel component is ready</td>\n  </tr>\n  <tr>\n    <td>onChangeProperties</td>\n    <td>Property (SimpleChanges type)</td>\n    <td>Event will properties of carousel changes</td>\n  </tr>\n  <tr>\n    <td>onSlideChange</td>\n    <td>carousel</td>\n    <td>Event will be fired when slide change</td>\n  </tr>\n  <tr>\n    <td>onSlideCentered</td>\n    <td>carousel</td>\n    <td>Event will be fired when actual slide are centered</td>\n  </tr>\n  <tr>\n    <td>onTransitionStart</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired in the beginning of transition. normally when you up finger and the slide isn't collocate</td>\n  </tr>\n  <tr>\n    <td>onTransitionEnd</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired after transition.</td>\n  </tr>\n  <tr>\n    <td>onSlideNextTransitionStart</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Same as \"onTransitionStart\" but for \"forward\" direction only</td>\n  </tr>\n  <tr>\n    <td>onSlideNextTransitionEnd</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Same as \"onTransitionEnd\" but for \"forward\" direction only</td>\n  </tr>\n  <tr>\n    <td>onSlidePrevTransitionStart</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Same as \"onTransitionEnd\" but for \"backward\" direction only</td>\n  </tr>\n  <tr>\n    <td>onSlidePrevTransitionEnd</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Same as \"onTransitionEnd\" but for \"backward\" direction only</td>\n  </tr>\n  <tr>\n    <td>onTouchMove</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired when user move carrousel</td>\n  </tr>\n  <tr>\n    <td>onTouchStart</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired when user start to move the carousel</td>\n  </tr>\n  <tr>\n    <td>onTouchEnd</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired when user finish to move the carousel</td>\n  </tr>\n  <tr>\n    <td>onSlideMove</td>\n    <td>hammer event &amp;&amp; carousel</td>\n    <td>Event will be fired when user touch and move finger over carousel and move it</td>\n  </tr>\n  <tr>\n    <td>onSlideMoveEnd</td>\n    <td>hammer event &amp;&amp; carousel</td>\n    <td>Event will be fired when user stop move finger over carousel</td>\n  </tr>\n  <tr>\n    <td>onSlideMoveStart</td>\n    <td>hammer event &amp;&amp; carousel</td>\n    <td>Event will be fired when user start move finger over carousel</td>\n  </tr>\n  <tr>\n    <td>onReachBeginning</td>\n    <td>carousel</td>\n    <td>Event will be fired when Swiper reach its beginning (initial position)</td>\n  </tr>\n  <tr>\n    <td>onReachEnd</td>\n    <td>carousel</td>\n    <td>Event will be fired when Swiper reach last slide</td>\n  </tr>\n  </tbody>\n</table>\n<h3 class=\"example-title\"(click)=\"showOutputExample = !showOutputExample\">example (show/hide)</h3>\n\n<div class=\"content-example {{showOutputExample?'show':''}}\">\n  <h3>Template:</h3>\n  <p>example to use output event when slideTransitionEnd.</p>\n  <p><i>note : use a function created in your component that where you want to receive the event</i></p>\n  <pre>\n      <div class=\"code hljs ruby\" [innerHTML]=\"outputHtml | safeHtml\">\n\n      </div>\n  </pre>\n  <p><a href=\"https://embed.plnkr.co/gVAvihaAcPyuzV2QTypp/\">Example Plnkr</a></p>\n</div>\n<h2>Functions & Properties</h2>\n<p>After we initialize Carrousel we have its initialized instance in variable (like topCarousel variable in example above) with helpful methods and properties:</p>\n<h3>functions</h3>\n<table>\n  <thead>\n  <tr>\n    <th>Event</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>slideNext()</td>\n    <td>Function to move the carousel to next slide</td>\n  </tr>\n  <tr>\n    <td>slidePrev()</td>\n    <td>Function to move the carousel to previous slide</td>\n  </tr>\n  <tr>\n    <td>slideTo(index)</td>\n    <td>Function to move the carousel to index slide</td>\n  </tr>\n  <tr>\n    <td>toggleMode()</td>\n    <td>Change to 'horizontal' or 'vertical' mode</td>\n  </tr>\n  <tr>\n    <td>update()</td>\n    <td>You should call it if you want update the carousel</td>\n  </tr>\n  <tr>\n    <td>lockCarousel(value)</td>\n    <td>Function for lock carousel swiper (True / False)</td>\n  </tr>\n  </tbody>\n</table>\n<h3>Properties</h3>\n<p><i>the current properties of carousel it's inside carousel variable, <b>the others properties of functions are Input or Outputs parameters</b></i></p>\n<table>\n  <thead>\n  <tr>\n    <th>Params</th>\n    <th>Type</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>currdeg</td>\n    <td>number</td>\n    <td>Actual deg of our carousel</td>\n  </tr>\n  <tr>\n    <td>activeIndex</td>\n    <td>number</td>\n    <td>Index number of currently active slide</td>\n  </tr>\n  <tr>\n    <td>degreesSlides</td>\n    <td>Array</td>\n    <td>Degrees where are our carousel slides</td>\n  </tr>\n  <tr>\n    <td>items</td>\n    <td>Array</td>\n    <td>Elements HTML in carousel</td>\n  </tr>\n  <tr>\n    <td>lastIndex</td>\n    <td>number</td>\n    <td>Last Index number active slide</td>\n  </tr>\n  <tr>\n    <td>lockSlides</td>\n    <td>Boolean</td>\n    <td>Carousel swipe status, if is blocked</td>\n  </tr>\n  <tr>\n    <td>totalItems</td>\n    <td>number</td>\n    <td>Total items in carousel</td>\n  </tr>\n  </tbody>\n</table>\n<h3 class=\"example-title\"(click)=\"showPropertiesExample = !showPropertiesExample\">example (show/hide)</h3>\n\n<div class=\"content-example {{showPropertiesExample?'show':''}}\">\n  <h3>Template:</h3>\n  <p>you need init the component in template setting a identificator like this:</p>\n  <pre>\n      <div class=\"code hljs ruby\" [innerHTML]=\"propertiesHtml | safeHtml\">\n\n      </div>\n  </pre>\n  <h3>Component:</h3>\n  <p>In your component you need get the carousel component like this:</p>\n  <pre>\n      <div class=\"code hljs ruby\" [innerHTML]=\"propertiesController | safeHtml\">\n\n      </div>\n  </pre>\n  <p><a href=\"https://embed.plnkr.co/1TYQm9E8L3lTTIHmONVJ/\">Example Plnkr</a></p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/api/api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiComponent = (function () {
    function ApiComponent() {
        this.showParameterExample = false;
        this.showPropertiesExample = false;
        this.showOutputExample = false;
        this.parameterHtml = "\n    < carousel-component [angle]=30\" >\n      < div class=\"item-carousel\">a< /div >\n      < div class=\"item-carousel\">b< /div >\n      < div class=\"item-carousel\">c< /div >\n      < div class=\"item-carousel\">d< /div >\n      < div class=\"item-carousel\">e< /div >\n      < div class=\"item-carousel\">f< /div > \n    < /carousel-component >\n  ";
        this.outputHtml = "\n    < carousel-component (onSlideChangeEnd)=\"slideChangeEndFn($event)\" >\n      < div class=\"item-carousel\">a< /div >\n      < div class=\"item-carousel\">b< /div >\n      < div class=\"item-carousel\">c< /div >\n      < div class=\"item-carousel\">d< /div >\n      < div class=\"item-carousel\">e< /div >\n      < div class=\"item-carousel\">f< /div > \n    < /carousel-component >\n  ";
        this.propertiesHtml = "\n    < carousel-component #topCarousel >\n      < div class=\"item-carousel\" > a < /div >\n      < div class=\"item-carousel\" > b < /div >\n    < /carousel-component >\n  ";
        this.propertiesController = "\n  import {Component, ViewChild} from '@angular/core';\n  import {CarouselComponent} from \"angular2-carousel\";\n\n  @Component({\n    selector: 'foo-component',\n    templateUrl: 'foo.component.html'\n  })\n  export class fooComponent{\n\n     @ViewChild('topCarousel') topCarousel: CarouselComponent;\n     constructor() {}\n\n    fooNextSlide() {\n      this.topCarousel.slideNext();\n    }\n  }\n  ";
    }
    ApiComponent.prototype.ngOnInit = function () {
    };
    ApiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-api',
            template: __webpack_require__("../../../../../src/app/pages/api/api.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/api/api.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApiComponent);
    return ApiComponent;
}());

//# sourceMappingURL=api.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/examples.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n  font-size: 5vh;\n  font-weight: 200;\n}\n\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  h1{\n    font-size: 4vh;\n\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Demos</h1>\n<app-simple-carousel></app-simple-carousel>\n<app-properties-carousel></app-properties-carousel>\n<app-functions-carousel></app-functions-carousel>\n<h1>Others demos</h1>\n<app-cube-carousel></app-cube-carousel>\n<app-style-carousel></app-style-carousel>\n<app-autoplay-carousel></app-autoplay-carousel>\n<app-multiple-slider-carousel></app-multiple-slider-carousel>\n"

/***/ }),

/***/ "../../../../../src/app/pages/examples/examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesComponent = (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examples',
            template: __webpack_require__("../../../../../src/app/pages/examples/examples.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/examples/examples.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());

//# sourceMappingURL=examples.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/get-started/get-started.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n  font-size: 2vh;\n}\nh1{\n  font-size: 5vh;\n  font-weight: 200;\n}\n\nh2{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\nli{\n  margin-top: 2vh;\n}\n\n/* Extra small devices (phones, less than 768px) */\n/* No media query since this is the default in Bootstrap */\n\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  *{\n    font-size: 1.8vh;\n  }\n\n}\n\n/* Medium devices (desktops, 992px and up) */\n@media (min-width: 992px) {\n  *{\n    font-size: 2vh;\n  }\n}\n\n/* Large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n  *{\n    font-size: 1.8vh;\n  }\n}\n\n\n@media (min-width: 1600px) {\n  h1{\n    font-size: 4vh;\n  }\n  h2{\n    font-size: 2.5vh;\n  }\n  *{\n    font-size: 1.8vh;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/get-started/get-started.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Getting Started with Angular Carousel</h1>\n<h2>1a Download and Install</h2>\n<p>First, you need download library:</p>\n<ul>\n  <li>We can download them from <a href=\"https://github.com/kappys1/angular2-carousel\">Swiper GitHub repository</a></li>\n  <li>\n    Or, using NPM\n    <pre>\n      <div class=\"code hljs ruby\">\n        npm install --save angular2-carrousel\n      </div>\n    </pre>\n  </li>\n  <li>\n    Or, using System.js, in your config.js\n    <pre>\n      <div class=\"code hljs ruby\" [innerHTML]=\"systemjsImport | safeHtml\">\n\n      </div>\n    </pre>\n  </li>\n</ul>\n<p>In the downloaded/installed package we need files from the dist/ folder.</p>\n\n<h2>2a Usage</h2>\n<p>First tou need to provide the CarouselModule to your desired Module</p>\n<pre >\n      <div class=\"code hljs ruby\" [innerHTML]=\"html | safeHtml\">\n\n      </div>\n</pre>\n<h2>3. Add Carousel HTML Layout</h2>\n<p>Now, you can use CarouselModule as follow:</p>\n<pre >\n      <div class=\"code hljs ruby\" [innerHTML]=\"html2 | safeHtml\">\n\n      </div>\n</pre>\n<p><b>All slides of carousel must have \"<i>.item-carousel</i>\" </b></p>\n<b><a href=\"https://embed.plnkr.co/CPWvmndIgpsglCvLChhc/\">Preview plnkr</a></b>\n"

/***/ }),

/***/ "../../../../../src/app/pages/get-started/get-started.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetStartedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetStartedComponent = (function () {
    function GetStartedComponent() {
        this.html = "\n         import {CarouselModule} from \"angular2-carousel\";\n        // In your App's module or Custom Module:\n        @NgModule({\n            imports: [\n               CarouselModule\n            ]\n        })\n  ";
        this.html2 = "\n        < carousel-component >\n            < div class=\"item-carousel\" >a < /div >\n            < div class=\"item-carousel\" >\n                < div class=\"b\" >\n                    < img/ >\n                    .\n                    .\n                    .\n                < /div >\n            < /div>\n            < div class=\"item-carousel\" >c< /div>\n            < div class=\"item-carousel\" >d< /div>\n          < /carousel-component>\n      ";
        this.systemjsImport = "" +
            "System.config({\n" +
            "    map:{\n" +
            "        'hammerjs': 'npm:hammerjs@2.0.8/hammer.js',\n" +
            "        'angular2-carousel' : 'https://npmcdn.com/angular2-carousel/bundles/ng2-carousel-module.umd.js'\n" +
            "    }\n" +
            "})";
    }
    GetStartedComponent.prototype.ngOnInit = function () {
    };
    GetStartedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-get-started',
            template: __webpack_require__("../../../../../src/app/pages/get-started/get-started.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/get-started/get-started.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GetStartedComponent);
    return GetStartedComponent;
}());

//# sourceMappingURL=get-started.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/pipe.safehtml.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
    var _a;
}());

//# sourceMappingURL=pipe.safehtml.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map