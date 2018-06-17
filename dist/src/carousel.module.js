/**
 * :tmtfactory) © 2017
 * Alex Marcos <alejandro.marcos@tmtfactory.com>
 * @ignore
 */
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
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { DomChangeDirective } from './dom-change.directive';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'pan': { direction: Hammer.DIRECTION_ALL } // override default settings
        };
        return _this;
    }
    return MyHammerConfig;
}(HammerGestureConfig));
export { MyHammerConfig };
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DomChangeDirective,
                        CarouselComponent,
                    ],
                    providers: [
                        {
                            provide: HAMMER_GESTURE_CONFIG,
                            useClass: MyHammerConfig
                        }
                    ],
                    exports: [CarouselComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    /** @nocollapse */
    CarouselModule.ctorParameters = function () { return []; };
    return CarouselModule;
}());
export { CarouselModule };
//# sourceMappingURL=carousel.module.js.map