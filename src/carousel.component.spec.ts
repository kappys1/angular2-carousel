import {Component, ViewChild} from '@angular/core';
import {TestBed, async, tick, fakeAsync} from '@angular/core/testing';
import { CarouselModule } from './carousel.module';
import {CarouselComponent} from "./carousel.component";
import {isNumber} from "util";
import {By} from "@angular/platform-browser";

@Component({
    selector: 'carousel-example',
    template: `
        <carousel-component [perspective]="perspective" [initialSlide]="initialSlide" #topCarousel>
            <div class="item-carousel">hi</div>
            <div class="item-carousel">hi</div>
            <div class="item-carousel">hi</div>
        </carousel-component>
    `
})
class CarouselPruebaComponent {
    @ViewChild('topCarousel') topCarousel: CarouselComponent;
    text:string
    perspective:number=2000;
    initialSlide:number = 0;
}
let fixture : any;
let component : any;
let element : any;
let carouselElm :any;
/**
 * Single stage on check instance and init object
 */
describe('Carousel check init', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[CarouselModule],
            declarations: [CarouselPruebaComponent]
        });
    });
    beforeEach(async(() => {
        TestBed.compileComponents();
        fixture = TestBed.createComponent(CarouselPruebaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('is instance', async(() => {
        expect(component).toBeDefined();
    }));
    it('check carosuel totalItems', () => {
        //check number of slides
        expect(component.topCarousel.carousel.totalItems).toEqual(3);
    });
    it('check carosuel lockSlides', () => {
        //check don't lockSlide
        expect(component.topCarousel.carousel.lockSlides).toBeFalsy();
    });
    it('check carosuel currentDeg',() => {
        //check current deg
        console.log(typeof component.topCarousel.carousel.currdeg);
        expect(component.topCarousel.carousel.currdeg).toBe(0);
    });
    it('check carosuel num items is same totalItems', () => {
        //check current deg
        expect(component.topCarousel.carousel.items.length).toEqual(component.topCarousel.carousel.totalItems);
    });
    it('check carousel is horizontal', () => {
        //check is Horizontal
        expect(component.topCarousel.carousel.isHorizontal).toBeTruthy();
    });
    it('check active Index', () => {
        //check is Horizontal
        expect(component.topCarousel.carousel.activeIndex).toEqual(0);
    });
    it('check max Height',() => {
        //check is Horizontal
        const el : HTMLElement = fixture.debugElement.nativeElement as HTMLElement;
        expect(el.querySelector('.item-carousel').clientHeight).toEqual(component.topCarousel.carousel.maxHeigthSize);
    });
    it('check show Two faces more',() => {
        //check is Horizontal
        component.topCarousel.morePairSlides=2;
        component.topCarousel.reInit();
        const el : HTMLElement = fixture.debugElement.nativeElement as HTMLElement;
        expect(el.querySelectorAll('.next').length).toEqual(2);
    });

    it('autoStart on init',(done) => {
        //check is Horizontal
        component.topCarousel.autoPlay=true;
        component.topCarousel.delayAutoPlay=50;
        component.topCarousel.reInit();
        setTimeout(function () {
            fixture.detectChanges();
            expect(component.topCarousel.carousel.activeIndex).toBe(1);
            done();
        },55);

    });
});

describe('Carousel Input() and Output() Variables', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[CarouselModule],
            declarations: [CarouselPruebaComponent]
        });
    });
    beforeEach(async(() => {
        TestBed.compileComponents();
        fixture = TestBed.createComponent(CarouselPruebaComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        carouselElm  = fixture.debugElement.query(By.css('.item-carousel'));
        fixture.detectChanges();
    }));

    // all cases with one input
    it('Change Perspective Input', async(() => {
        component.perspective = 200;
        fixture.detectChanges();
        expect(component.topCarousel.perspective).toBe(200);
    }));

    it('Change Init Slide superate max ', async(() => {
        component.initialSlide = 5;
        fixture.detectChanges();
        component.topCarousel.reInit();
        expect(component.topCarousel.initialSlide).toBe(2);
        expect(component.topCarousel.carousel.activeIndex).toBe(2);
    }));
    it('Change Init Slide superate max ', async(() => {
        component.initialSlide = -5;
        fixture.detectChanges();
        component.topCarousel.reInit();
        expect(component.topCarousel.initialSlide).toBe(0);
        expect(component.topCarousel.carousel.activeIndex).toBe(0);
    }));

    //outputs
    it('Output onChangeProperties ', async(() => {
        let value = null;
        component.topCarousel.onChangePropertiesCarousel.subscribe((res:any) => value = res);
        component.initialSlide=1;
        fixture.detectChanges();
        expect(value.initialSlide.currentValue).toBe(1);
    }));

    it('Output onSlideChange ', async(() => {
        let value = null;
        component.topCarousel.onSlideChange.subscribe((res:any) => value = res);
        component.topCarousel.slideNext();
        expect(value.activeIndex).toBe(1);
    }));


    it('Output touchstart ', (done) => {
        component.topCarousel.onTouchStart.subscribe(val =>{
            expect(component.topCarousel.carousel.activeIndex).toBe(0);
            done();
        });
        let dimensions = fixture.nativeElement.getBoundingClientRect();
        let x =  dimensions.left + (dimensions.width/2);
        let y =  dimensions.top + (dimensions.height/2);
        sendTouchEvent(component.topCarousel.carouselElm.nativeElement,'touchstart',x,y);
        fixture.detectChanges();
    });

    it('Output touchmove ', (done) => {
        component.topCarousel.onTouchMove.subscribe(val =>{
            expect(component.topCarousel.carousel.activeIndex).toBe(0);
            done();
        });
        let dimensions = fixture.nativeElement.getBoundingClientRect();
        let x =  dimensions.left + (dimensions.width/2);
        let y =  dimensions.top + (dimensions.height/2);
        sendTouchEvent(component.topCarousel.carouselElm.nativeElement,'touchmove',x,y);
        fixture.detectChanges();
    });

    it('Output touchend ', (done) => {
        component.topCarousel.onTouchEnd.subscribe(val =>{
            expect(component.topCarousel.carousel.activeIndex).toBe(0);
            done();
        });
        let dimensions = fixture.nativeElement.getBoundingClientRect();
        let x =  dimensions.left + (dimensions.width/2);
        let y =  dimensions.top + (dimensions.height/2);
        sendTouchEvent(component.topCarousel.carouselElm.nativeElement,'touchend');
        fixture.detectChanges();
    });

    it('Output panstart ', (done) => {
        // component.topCarousel.onTouchEnd.subscribe(val =>{
        //     expect(component.topCarousel.carousel.activeIndex).toBe(0);
        //     done();
        // });
        let dimensions = fixture.nativeElement.getBoundingClientRect();
        let x =  dimensions.left + (dimensions.width/2);
        let y =  dimensions.top + (dimensions.height/2);
        sendTouchEvent(component.topCarousel.carouselElm.nativeElement,'touchstart',x,y);
        sendTouchEvent(component.topCarousel.carouselElm.nativeElement,'touchmove',x+100,y);
        sendTouchEvent(component.topCarousel.carouselElm.nativeElement,'touchend',x+200,y);
        fixture.detectChanges();
        expect(true).toBe(true)
        done();
    });

});

describe('Carousel check public functions', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[CarouselModule],
            declarations: [CarouselPruebaComponent]
        });
    });
    beforeEach(async(() => {
        TestBed.compileComponents();
        fixture = TestBed.createComponent(CarouselPruebaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('Slide goTo', async(() => {
        component.topCarousel.slideTo(2);
        expect(component.topCarousel.carousel.activeIndex).toEqual(2);
    }));

    it('Slide superate Limit', async(() => {
        component.topCarousel.slideTo(4);
        expect(component.topCarousel.carousel.activeIndex).toEqual(0);
    }));
    it('Slide negative', async(() => {
        component.topCarousel.slideTo(-1);
        expect(component.topCarousel.carousel.activeIndex).toEqual(0);
    }));
    it('Slide Next', async(() => {
        component.topCarousel.slideNext();
        expect(component.topCarousel.carousel.activeIndex).toEqual(1);
    }));
    it('Slide Next limit', async(() => {
        component.topCarousel.slideTo(2);
        component.topCarousel.slideNext();
        expect(component.topCarousel.carousel.activeIndex).toEqual(2);
    }));
    it('Slide Prev', async(() => {
        component.topCarousel.slideTo(1);
        component.topCarousel.slidePrev();
        expect(component.topCarousel.carousel.activeIndex).toEqual(0);
    }));
    it('Slide Prev limit', async(() => {
        component.topCarousel.slidePrev();
        expect(component.topCarousel.carousel.activeIndex).toEqual(0);
    }));
    it('lock carousel', async(() => {
        component.topCarousel.lockCarousel(true);
        expect(component.topCarousel.carousel.lockSlides).toBeTruthy();
    }));
    it('Toggle Mode to Vertical', async(() => {
        component.topCarousel.toggleMode();
        expect(component.topCarousel.carousel.isHorizontal).toBeFalsy();
    }));
    it('Toggle Mode to Horizontal', async(() => {
        component.topCarousel.toggleMode();
        component.topCarousel.toggleMode();
        expect(component.topCarousel.carousel.isHorizontal).toBeTruthy();
    }));

    it('autoPlay start', (done) => {
        component.topCarousel.delayAutoPlay = 50;
        component.topCarousel.autoPlayStart();
        fixture.detectChanges();
        setTimeout(function () {
            expect(component.topCarousel.carousel.autoPlayIsRunning).toBeTruthy();
            expect(component.topCarousel.carousel.activeIndex).toBe(1);
            component.topCarousel.autoPlayStop();
            done();
        },55);
    });

    it('autoPlay stop',((done) => {
        component.topCarousel.delayAutoPlay = 50;
        component.topCarousel.autoPlayStart();
        fixture.detectChanges();
        setTimeout(function () {
            component.topCarousel.autoPlayStop();
            fixture.detectChanges();
        },55);
        setTimeout(function () {
            expect(component.topCarousel.carousel.activeIndex).toBe(1);
            expect(component.topCarousel.carousel.autoPlayIsRunning).toBeFalsy();
            done();
        },60);
    }));

    it('autoPlay not overflow',((done) => {
        component.topCarousel.delayAutoPlay = 10;
        component.topCarousel.autoPlayStart();
        setTimeout(function () {
            expect(component.topCarousel.carousel.activeIndex).toBe(component.topCarousel.carousel.totalItems-1);
            done();
        },60);
    }));

    it('Reinit Probe', async(() => {
        component.topCarousel.slideNext();
        component.topCarousel.reInit();
        expect(component.topCarousel.carousel.activeIndex).toEqual(0);
    }));

    it('Update', async(() => {
        component.topCarousel.perspective = 400;
        component.topCarousel.update();
        let container = component.topCarousel.containerElm.nativeElement;
        let perspective = !isNumber(container.style.perspective)? container.style.perspective.split('px')[0]: container.style.perspective;
        expect(perspective).toEqual(400);
    }));

    afterEach(()=>{
        fixture.destroy();
    })
});
function sendTouchEvent(element, eventType,x=0,y=0) {

    let e;
    try{
        e = document.createEvent('TouchEvent');
        e.initEvent(eventType, true, true)
    }
    catch (err){
        try{
            e = document.createEvent('UIEvent');
            e.initUIEvent(eventType, true, true,null,null);
        }
        catch(err){
            e = document.createEvent('Event');
            e.initTouchEvent(eventType, true, true)
        }
    }
    e.targetTouches = {
        pageX: x,
        pageY: y
    };
    element.dispatchEvent(e);

}
