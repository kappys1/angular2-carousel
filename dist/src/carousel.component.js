/**
 * :tmtfactory) © 2017
 * Alex Marcos <alejandro.marcos@tmtfactory.com>
 * @ignore
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as Hammer from 'hammerjs';
import { Carousel } from "./Carousel";
// TODO: move chart.js to it's own component
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(componentElement) {
        this.componentElement = componentElement;
        this.itemsCarouselRendered = 0;
        this.morePairSlides = 1;
        this.angle = 45;
        this.ratioScale = 1;
        this.margin = 20;
        this.perspective = 2000;
        this.endInSlide = true;
        this.timeToSlide = 300;
        this.lockSlides = false;
        this.initialSlide = 0;
        this.loop = false;
        this.axis = "horizontal";
        //autoPlay
        this.autoPlay = false;
        this.delayAutoPlay = 3000;
        this.onInitCarousel = new EventEmitter();
        this.onReadyCarousel = new EventEmitter();
        this.onChangePropertiesCarousel = new EventEmitter();
        this.onSlideChange = new EventEmitter();
        this.onSlideCentered = new EventEmitter();
        this.onTransitionStart = new EventEmitter();
        this.onTransitionEnd = new EventEmitter();
        this.onSlideNextTransitionStart = new EventEmitter();
        this.onSlideNextTransitionEnd = new EventEmitter();
        this.onSlidePrevTransitionStart = new EventEmitter();
        this.onSlidePrevTransitionEnd = new EventEmitter();
        this.onSlideMove = new EventEmitter();
        this.onSlideMoveEnd = new EventEmitter();
        this.onSlideMoveStart = new EventEmitter();
        this.onTouchMove = new EventEmitter();
        this.onTouchStart = new EventEmitter();
        this.onTouchEnd = new EventEmitter();
        this.onReachBeginning = new EventEmitter();
        this.onReachEnd = new EventEmitter();
        this.carousel = new Carousel();
    }
    CarouselComponent.prototype.onDomChange = function ($event) {
        if ($event.addedNodes.length > 0) {
            if (this.itemsCarouselRendered === 0) {
                this.reInit();
            }
            else {
                this.update();
                this.updateCssShowSlides();
            }
            this.itemsCarouselRendered = this.carouselElm.nativeElement.getElementsByClassName("item-carousel").length;
        }
    };
    CarouselComponent.prototype.ngOnInit = function () {
        this.onInitCarousel.emit(this.carousel);
        this.itemsCarouselRendered = this.carouselElm.nativeElement.getElementsByClassName("item-carousel").length;
    };
    CarouselComponent.prototype.ngOnChanges = function (changes) {
        for (var i = 0; i < Object.keys(changes).length; i++) {
            if (changes[Object.keys(changes)[i]].currentValue != changes[Object.keys(changes)[i]].previousValue && !changes[Object.keys(changes)[i]].isFirstChange()) {
                this.update();
                this.onChangePropertiesCarousel.emit(changes);
            }
        }
    };
    CarouselComponent.prototype.ngAfterViewInit = function () {
        this.initEventsPan();
        this.configPlugin();
        setTimeout(function () {
            this.componentElement.nativeElement.className += ' ready';
        }.bind(this));
        this.onReadyCarousel.emit(this.carousel);
    };
    CarouselComponent.prototype.lockCarousel = function (val) {
        this.carousel.lockSlides = val;
    };
    CarouselComponent.prototype.slideNext = function () {
        if (this.checkLimitsCarrousel(this.carousel.activeIndex + 1)) {
            this.moveSlideTo(this.carousel.activeIndex + 1);
            var vm_1 = this;
            setTimeout(function () { return vm_1.detectCurrentSlide(); });
        }
    };
    CarouselComponent.prototype.slidePrev = function () {
        if (this.checkLimitsCarrousel(this.carousel.activeIndex - 1)) {
            this.moveSlideTo(this.carousel.activeIndex - 1);
            var vm_2 = this;
            setTimeout(function () { return vm_2.detectCurrentSlide(); });
        }
    };
    CarouselComponent.prototype.slideTo = function (index) {
        if (this.checkLimitsCarrousel(index)) {
            this.moveSlideTo(index);
            var vm_3 = this;
            setTimeout(function () { return vm_3.detectCurrentSlide(); });
        }
    };
    CarouselComponent.prototype.autoPlayStart = function () {
        this.autoPlay = true;
        this.autoPlaySlide();
    };
    CarouselComponent.prototype.autoPlayStop = function () {
        clearInterval(this.autoPlayTimeout);
        this.carousel.autoPlayIsRunning = false;
    };
    CarouselComponent.prototype.toggleMode = function () {
        this.axis = this.axis == "vertical" ? "horizontal" : "vertical";
        this.update();
    };
    CarouselComponent.prototype.reInit = function () {
        this.carousel = new Carousel;
        this.configPlugin();
    };
    CarouselComponent.prototype.update = function () {
        this.setPerspectiveContainer();
        this.checkRotation();
        this.carousel.items = Array.from(this.carouselElm.nativeElement.getElementsByClassName("item-carousel"));
        this.carousel.totalItems = this.carousel.items.length;
        this.getmaxSizes();
        this.carousel.lockSlides = this.lockSlides;
        this.setDegreesOnSlides();
        this.setTransformCarrousel(-this.carousel.degreesSlides[this.carousel.activeIndex]);
    };
    CarouselComponent.prototype.configPlugin = function () {
        // this.setPerspectiveContainer();
        // this.checkRotation();
        // this.carousel.items = Array.from(this.carouselElm.nativeElement.getElementsByClassName("item-carousel"));
        // this.carousel.totalItems = this.carousel.items.length;
        // this.getmaxSizes();
        // this.carousel.lockSlides = this.lockSlides;
        // this.setDegreesOnSlides();
        this.update();
        this.manageEvents();
        this.initSlidesOn();
        this.updateCssShowSlides();
        this.autoPlaySlide();
    };
    CarouselComponent.prototype.initEventsPan = function () {
        var hammertime = new Hammer(this.carouselElm.nativeElement);
        hammertime.on('pan', this.rotate.bind(this));
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 0 });
    };
    CarouselComponent.prototype.rotate = function (e) {
        if (!this.carousel.lockSlides) {
            var velocity = this.carousel.isHorizontal ? e.velocityX : -e.velocityY;
            this.setNewDeg(this.carousel.currdeg + velocity * window.devicePixelRatio);
            this.moveCarrousel(this.carousel.currdeg);
            if (e.isFinal) {
                if (this.endInSlide) {
                    this.moveSlideTo(this.carousel.activeIndex);
                }
            }
        }
    };
    CarouselComponent.prototype.autoPlaySlide = function () {
        if (this.autoPlay) {
            this.autoPlayTimeout = setTimeout(function () {
                this.carousel.autoPlayIsRunning = true;
                this.slideNext();
                this.autoPlaySlide();
            }.bind(this), this.delayAutoPlay);
        }
    };
    CarouselComponent.prototype.initSlidesOn = function () {
        if (this.initialSlide >= 0 && this.initialSlide < this.carousel.items.length) {
            this.carousel.activeIndex = parseInt(this.initialSlide.toString());
        }
        else if (this.initialSlide >= this.carousel.items.length) {
            this.carousel.activeIndex = this.carousel.items.length - 1;
            this.initialSlide = this.carousel.activeIndex;
        }
        else {
            this.carousel.activeIndex = 0;
            this.initialSlide = this.carousel.activeIndex;
        }
        var newDeg = this.carousel.activeIndex * this.angle;
        this.setNewDeg(-newDeg);
        this.setTransformCarrousel(-newDeg);
    };
    CarouselComponent.prototype.setNewDeg = function (newDeg) {
        this.carousel.currdeg = newDeg;
        if (this.carousel.currdeg > 0) {
            this.carousel.currdeg = 0;
        }
        if (this.carousel.currdeg < -this.carousel.maxDegree) {
            this.carousel.currdeg = -this.carousel.maxDegree;
        }
    };
    CarouselComponent.prototype.checkRotation = function () {
        this.carousel.isHorizontal = this.axis !== "vertical";
        this.rotationFn = this.carousel.isHorizontal ? 'rotateY' : 'rotateX';
    };
    CarouselComponent.prototype.checkLimitsCarrousel = function (index) {
        return this.carousel.activeIndex != index && index >= 0 && index < this.carousel.totalItems;
    };
    CarouselComponent.prototype.moveSlideTo = function (index) {
        this.setNewDeg(-this.carousel.degreesSlides[index]);
        this.moveCarrousel(this.carousel.currdeg, this.timeToSlide);
    };
    CarouselComponent.prototype.moveCarrousel = function (deg, timeTransform) {
        if (timeTransform === void 0) { timeTransform = 0; }
        this.carouselElm.nativeElement.style.transition = "transform " + timeTransform + "ms";
        this.carouselElm.nativeElement.style.webkitTransition = "transform " + timeTransform + "ms";
        this.setTransformCarrousel(deg);
        this.detectCurrentSlide();
    };
    CarouselComponent.prototype.setTransformCarrousel = function (deg) {
        this.carouselElm.nativeElement.style.transform = "translateZ(" + (-this.radius) + "px) " + this.rotationFn + "(" + deg + "deg)";
        this.carouselElm.nativeElement.style.webkitTransform = "translateZ(" + (-this.radius) + "px) " + this.rotationFn + "(" + deg + "deg)";
        this.sendSlideIsCentered();
    };
    CarouselComponent.prototype.sendSlideIsCentered = function () {
        if (this.carousel.currdeg == -this.carousel.degreesSlides[this.carousel.activeIndex]) {
            this.onSlideCentered.emit(this.carousel);
        }
    };
    CarouselComponent.prototype.setPerspectiveContainer = function () {
        this.containerElm.nativeElement.style.perspective = this.perspective;
        this.containerElm.nativeElement.style.webkitPerspective = this.perspective;
        this.containerElm.nativeElement.style.MozPerspective = this.perspective;
    };
    CarouselComponent.prototype.getmaxSizes = function () {
        var _this = this;
        this.carousel.items.map(function (val) {
            var witdh = val.offsetWidth;
            var height = val.offsetHeight;
            _this.carousel.maxWidthSize = 0;
            _this.carousel.maxHeigthSize = 0;
            if (witdh > _this.carousel.maxWidthSize) {
                _this.carousel.maxWidthSize = witdh;
                _this.carousel.totalWidth = _this.carousel.items.length * _this.carousel.maxWidthSize;
            }
            if (height > _this.carousel.maxHeigthSize) {
                _this.carousel.maxHeigthSize = height;
                _this.carousel.totalWidth = _this.carousel.items.length * _this.carousel.maxHeigthSize;
            }
        });
        this.setContainerWithMaxSize();
    };
    CarouselComponent.prototype.setContainerWithMaxSize = function () {
        this.containerElm.nativeElement.style.width = this.carousel.maxWidthSize + 'px';
        this.containerElm.nativeElement.style.height = this.carousel.maxHeigthSize + 'px';
    };
    CarouselComponent.prototype.setDegreesOnSlides = function () {
        var _this = this;
        var auxDegree = 0;
        var panelSize = this.carousel.isHorizontal ? this.carousel.maxWidthSize : this.carousel.maxHeigthSize;
        this.radius = (Math.round((panelSize / 2) /
            Math.tan(Math.PI / (360 / this.angle))) + this.margin);
        this.carousel.degreesSlides = [];
        this.carousel.items.map(function (val, index) {
            val.style.transform = _this.rotationFn + "(" + auxDegree + "deg) translateZ(" + (_this.radius) + "px)";
            val.style.webkitTransform = _this.rotationFn + "(" + auxDegree + "deg) translateZ(" + (_this.radius) + "px)";
            _this.carousel.degreesSlides.push(auxDegree);
            _this.carousel.maxDegree = auxDegree;
            auxDegree += _this.angle;
        });
    };
    CarouselComponent.prototype.detectCurrentSlide = function () {
        var _this = this;
        var aux = 99e9;
        var index = 0;
        this.carousel.degreesSlides.forEach(function (val, i) {
            var res = Math.abs(val - Math.abs(_this.carousel.currdeg));
            if (res < aux) {
                aux = res;
                index = i;
            }
        });
        if (this.carousel.activeIndex != index) {
            this.carousel.lastIndex = this.carousel.activeIndex;
            this.carousel.activeIndex = index;
            this.updateCssShowSlides();
            this.onSlideChange.emit(this.carousel);
            if (this.carousel.activeIndex == 0) {
                this.onReachBeginning.emit(this.carousel);
            }
            else if (this.carousel.activeIndex == this.carousel.totalItems - 1) {
                this.onReachEnd.emit(this.carousel);
            }
        }
    };
    CarouselComponent.prototype.updateCssShowSlides = function () {
        var vm = this;
        var currentIndex = vm.carousel.activeIndex;
        var actual = this.carousel.items[currentIndex];
        vm.removeClassShowSlides("actual");
        vm.removeClassShowSlides("prev");
        vm.removeClassShowSlides("next");
        if (actual) {
            actual.className += " actual";
        }
        for (var x = 0; x < this.morePairSlides; x++) {
            var prev = vm.carousel.items[currentIndex - (x + 1)];
            var next = vm.carousel.items[currentIndex + (x + 1)];
            if (prev) {
                prev.className += " prev";
            }
            if (next) {
                next.className += " next";
            }
        }
    };
    CarouselComponent.prototype.removeClassShowSlides = function (tagClass) {
        if (this.carouselElm.nativeElement.getElementsByClassName(tagClass).length > 0) {
            Array.from(this.carouselElm.nativeElement.getElementsByClassName(tagClass)).map(function (val) {
                val['classList'].remove(tagClass);
            });
        }
    };
    CarouselComponent.prototype.manageEvents = function () {
        var _this = this;
        var options = {
            preventDefault: true
        };
        var vm = this;
        var hammertime = new Hammer(this.carouselElm.nativeElement, options);
        hammertime.on("panstart", function (e) {
            vm.onSlideMoveStart.emit({ carousel: vm.carousel, event: e });
        });
        hammertime.on("panend", function (e) {
            vm.onSlideMoveEnd.emit({ carousel: vm.carousel, event: e });
        });
        hammertime.on("pan", function (e) {
            vm.onSlideMove.emit({ carousel: vm.carousel, event: e });
        });
        this.carouselElm.nativeElement.addEventListener('touchstart', function (e) {
            vm.onTouchStart.emit({ carousel: vm.carousel, event: e });
        });
        this.carouselElm.nativeElement.addEventListener('touchmove', function (e) {
            vm.onTouchMove.emit({ carousel: vm.carousel, event: e });
        });
        this.carouselElm.nativeElement.addEventListener('touchend', function (e) {
            vm.onTouchEnd.emit({ carousel: vm.carousel, event: e });
        });
        this.carouselElm.nativeElement.addEventListener('transitionend', function (e) {
            var elm = { carousel: vm.carousel, event: e };
            if (e.propertyName === "transform") {
                _this.onTransitionEnd.emit(elm);
                if (vm.carousel.lastIndex > vm.carousel.activeIndex) {
                    _this.onSlideNextTransitionEnd.emit(elm);
                }
                else {
                    _this.onSlidePrevTransitionEnd.emit(elm);
                }
            }
        });
        this.carouselElm.nativeElement.addEventListener('transitionstart', function (e) {
            var elm = { carousel: vm.carousel, event: e };
            if (e.propertyName === "transform") {
                _this.onTransitionStart.emit(elm);
                if (e.direction === Hammer.DIRECTION_LEFT) {
                    vm.onSlideNextTransitionStart.emit(elm);
                }
                else if (e.direction === Hammer.DIRECTION_RIGHT) {
                    vm.onSlidePrevTransitionStart.emit(elm);
                }
            }
        });
        window.addEventListener("resize", function () {
            this.update();
        }.bind(this));
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'carousel-component',
                    styles: ["\n        :host{\n            display: flex;\n        }\n        :host .container {\n            margin: 0 auto;\n            width: 600px;\n            height: 400px;\n            position: relative;\n        }\n\n\n        :host .container .carousel {\n            height: 100%;\n            width: 100%;\n            position: absolute;\n            -webkit-transform-style: preserve-3d;\n            -moz-transform-style: preserve-3d;\n            -o-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n \n        }\n        :host.ready .carousel {\n            -webkit-transition: -webkit-transform 300ms;\n            -moz-transition:-moz-transform 300ms;\n            -o-transition: -o-transform 300ms;\n            transition: transform 300ms;\n        }\n        :host .container .carousel ::content >>> .item-carousel {\n            display: block;\n            position: absolute;\n            border:1px solid black;\n            width: 100%;\n            height: 100%;\n            text-align: center;\n            transform-style: preserve-3d;\n            opacity: 0;\n        }\n        :host.ready .carousel ::content >>> .item-carousel {\n            -webkit-transition: opacity 300ms, -webkit-transform 300ms;\n            -moz-transition: opacity 300ms, -moz-transform 300ms;\n            -o-transition: opacity 300ms, -o-transform 300ms;\n            transition: opacity 300ms, transform 300ms;\n        }\n        \n        :host .container .carousel ::content >>> .item-carousel img{\n            user-drag: none;\n            user-select: none;\n            -moz-user-select: none;\n            -webkit-user-drag: none;\n            -webkit-user-select: none;\n            -ms-user-select: none;\n        }\n        \n        :host .container .carousel ::content >>> .item-carousel.next,\n        :host .container .carousel ::content >>> .item-carousel.prev,\n        :host .container .carousel ::content >>> .item-carousel.actual{\n            opacity: 0.95;\n        }\n\n\n    "],
                    template: '<div class="container" #container>\n' +
                        '  <div class="carousel" #carousel  (domChange)="onDomChange($event)">\n' +
                        '    <ng-content  select=".item-carousel"></ng-content>\n' +
                        '  </div>\n' +
                        '</div>',
                },] },
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    CarouselComponent.propDecorators = {
        'morePairSlides': [{ type: Input, args: ["morePairSlides",] },],
        'angle': [{ type: Input, args: ["angle",] },],
        'ratioScale': [{ type: Input, args: ["ratioScale",] },],
        'margin': [{ type: Input, args: ["margin",] },],
        'perspective': [{ type: Input, args: ["perspective",] },],
        'endInSlide': [{ type: Input, args: ["endInSlide",] },],
        'timeToSlide': [{ type: Input, args: ["timeToSlide",] },],
        'lockSlides': [{ type: Input, args: ["lockSlides",] },],
        'initialSlide': [{ type: Input, args: ["initialSlide",] },],
        'loop': [{ type: Input, args: ["loop",] },],
        'axis': [{ type: Input, args: ["mode",] },],
        'autoPlay': [{ type: Input, args: ["autoPlay",] },],
        'delayAutoPlay': [{ type: Input, args: ["delayAutoPlay",] },],
        'onInitCarousel': [{ type: Output, args: ["onInit",] },],
        'onReadyCarousel': [{ type: Output, args: ["onReady",] },],
        'onChangePropertiesCarousel': [{ type: Output, args: ["onChangeProperties",] },],
        'onSlideChange': [{ type: Output, args: ["onSlideChange",] },],
        'onSlideCentered': [{ type: Output, args: ["onSlideCentered",] },],
        'onTransitionStart': [{ type: Output, args: ["onTransitionStart",] },],
        'onTransitionEnd': [{ type: Output, args: ["onTransitionEnd",] },],
        'onSlideNextTransitionStart': [{ type: Output, args: ["onSlideNextTransitionStart",] },],
        'onSlideNextTransitionEnd': [{ type: Output, args: ["onSlideNextTransitionEnd",] },],
        'onSlidePrevTransitionStart': [{ type: Output, args: ["onSlidePrevTransitionStart",] },],
        'onSlidePrevTransitionEnd': [{ type: Output, args: ["onSlidePrevTransitionEnd",] },],
        'onSlideMove': [{ type: Output, args: ["onSlideMove",] },],
        'onSlideMoveEnd': [{ type: Output, args: ["onSlideMoveEnd",] },],
        'onSlideMoveStart': [{ type: Output, args: ["onSlideMoveStart",] },],
        'onTouchMove': [{ type: Output, args: ["onTouchMove",] },],
        'onTouchStart': [{ type: Output, args: ["onTouchStart",] },],
        'onTouchEnd': [{ type: Output, args: ["onTouchEnd",] },],
        'onReachBeginning': [{ type: Output, args: ["onReachBeginning",] },],
        'onReachEnd': [{ type: Output, args: ["onReachEnd",] },],
        'carouselElm': [{ type: ViewChild, args: ["carousel",] },],
        'containerElm': [{ type: ViewChild, args: ["container",] },],
    };
    return CarouselComponent;
}());
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map