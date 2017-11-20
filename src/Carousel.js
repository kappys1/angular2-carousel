/**
 * :tmtfactory) © 2017
 * Alex Marcos <alejandro.marcos@tmtfactory.com>
 * @ignore
 */
"use strict";
var Carousel = (function () {
    function Carousel() {
        this._currdeg = 0;
        this._totalItems = 0;
        this._maxSize = 0;
        this._maxDegree = 0;
        this._totalWidth = 0;
        this._items = [];
        this._degreesSlides = [];
        this._activeIndex = 0;
        this._lastIndex = -1;
        this._lockSlides = false;
    }
    Object.defineProperty(Carousel.prototype, "currdeg", {
        get: function () {
            return this._currdeg;
        },
        set: function (value) {
            this._currdeg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "totalItems", {
        get: function () {
            return this._totalItems;
        },
        set: function (value) {
            this._totalItems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "maxSize", {
        get: function () {
            return this._maxSize;
        },
        set: function (value) {
            this._maxSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "maxDegree", {
        get: function () {
            return this._maxDegree;
        },
        set: function (value) {
            this._maxDegree = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "totalWidth", {
        get: function () {
            return this._totalWidth;
        },
        set: function (value) {
            this._totalWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "degreesSlides", {
        get: function () {
            return this._degreesSlides;
        },
        set: function (value) {
            this._degreesSlides = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (value) {
            this._activeIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "lockSlides", {
        get: function () {
            return this._lockSlides;
        },
        set: function (value) {
            this._lockSlides = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "lastIndex", {
        get: function () {
            return this._lastIndex;
        },
        set: function (value) {
            this._lastIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    return Carousel;
}());
exports.Carousel = Carousel;
//# sourceMappingURL=Carousel.js.map