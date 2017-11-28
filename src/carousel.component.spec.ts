import {Component, ViewChild} from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { CarouselModule } from './carousel.module';
import {CarouselComponent} from "./carousel.component";
import {TouchSimulate} from "touch-simulate";
import {Carousel} from "./Carousel";
import {isNumber} from "util";

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
        let value:Carousel = null;
        component.topCarousel.onSlideChange.subscribe((res:any) => value = res);
        component.topCarousel.slideNext();
        expect(value.activeIndex).toBe(1);
    }));

    // it('Output touchstart ', async(() => {
    //     let value = null;
    //     component.topCarousel.onSlideChange.subscribe((res:any) => value = res);
    //     element.triggerEventHandler('touchstart', null);
    //     console.log(value)
    //     expect(value['carousel'].activeIndex).toBe(0);
    // }));

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
});

