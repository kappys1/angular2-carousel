import {Component, ViewChild} from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { CarouselModule } from './carousel.module';
import {CarouselComponent} from "./carousel.component";

@Component({
    selector: 'carousel-example',
    template: `
        <carousel-component #topCarousel>
            <div class="item-carousel">hi</div>
            <div class="item-carousel">hi</div>
            <div class="item-carousel">hi</div>
        </carousel-component>
    `
})
class CarouselPruebaComponent {
    @ViewChild('topCarousel') topCarousel: CarouselComponent;
    text:string
}

/**
 * Single stage on check instance and init object
 */
describe('Carousel check init', () => {
    let fixture : any;
    let component : any;
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
    it('check carosuel totalItems', async(() => {
        //check number of slides
        expect(component.topCarousel.carousel.totalItems).toEqual(3);
    }));
    it('check carosuel lockSlides', async(() => {
        //check don't lockSlide
        expect(component.topCarousel.carousel.lockSlides).toBeFalsy();
    }));
    it('check carosuel currentDeg', async(() => {
        //check current deg
        console.log(typeof component.topCarousel.carousel.currdeg);
        expect(component.topCarousel.carousel.currdeg).toBe(0);
    }));
    it('check carosuel num items is same totalItems', async(() => {
        //check current deg
        expect(component.topCarousel.carousel.items.length).toEqual(component.topCarousel.carousel.totalItems);
    }));
    it('check carousel is horizontal', async(() => {
        //check is Horizontal
        expect(component.topCarousel.carousel.isHorizontal).toBeTruthy();
    }));
    it('check active Index', async(() => {
        //check is Horizontal
        expect(component.topCarousel.carousel.activeIndex).toEqual(0);
    }));
    it('check max Height', async(() => {
        //check is Horizontal
        const el : HTMLElement = fixture.debugElement.nativeElement as HTMLElement;
        expect(el.querySelector('.item-carousel').clientHeight).toEqual(component.topCarousel.carousel.maxHeigthSize);
    }));
    it('check max Width', async(() => {
        //check is Horizontal
        const el : HTMLElement = fixture.debugElement.nativeElement as HTMLElement;
        expect(el.querySelector('.item-carousel').clientWidth).toEqual(component.topCarousel.carousel.maxWidthSize);
    }));
});

describe('Carousel check public functions', () => {
    let fixture : any;
    let component : any;
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

    it('Reinit Probe', async(() => {
        component.topCarousel.slideNext();
        component.topCarousel.reInit();
        expect(component.topCarousel.carousel.activeIndex).toEqual(0);
    }));

    it('Update', async(() => {
        component.topCarousel.perspective = 400;
        component.topCarousel.update();
        let container = component.topCarousel.containerElm.nativeElement;
        expect(container.style.perspective).toEqual(400);
    }));
});

