# Angular2-Carousel

[![npm version](https://badge.fury.io/js/angular2-carousel.svg)](https://badge.fury.io/js/angular2-carousel) [![npm](https://img.shields.io/badge/build-passed-brightgreen.svg?style=flat)](https://www.npmjs.com/package/angular2-carousel) ![Angular2+](https://img.shields.io/badge/Angular_2+-passing-brightgreen.svg?style=flat) ![Angular2+](https://img.shields.io/badge/Angular_5-failure-red.svg?style=flat) ![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)

> this is a smart library to create a carousel for angular 2+

## Demo
> demos available [here](https://kappys1.github.io/angular2-carousel)

## Install
You can install the package from our npm package
```
 npm install --save angular2-carousel
```

## Usage
First tou need to provide the CarouselModule to your desired Module 

```
import {CarouselModule} from "angular2-carousel";

// In your App's module or Custom Module:
@NgModule({
    imports: [
       CarouselModule
    ] 
})
```

Now, you can use CarouselModule as follow:

```
<carousel-component >
    <div class="item-carousel">a</div>
    <div class="item-carousel">
        <div class="b">
            <img/>
            .
            .
            .
        </div>
    </div>
    <div class="item-carousel">c</div>
    <div class="item-carousel">d</div>
</carousel-component>
```

**All slides of carousel must have** ``.item-carousel``


#### [Preview](https://embed.plnkr.co/CPWvmndIgpsglCvLChhc/)

## Documentation
### Inputs (Properties)

| Parameter | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| morePairSlides | number | 1 | Add slide carousel in both sides |
| angle | number | 45 | Angle to distribute the carousel |
| ratioScale | number | 1 | Carousel scale ratio |
| margin | number | 0 | Margin to separate between carousel slides  |
| perspective | number | 2000 | Perspective to show the carousel slide |
| timeToSlide | number | 300 | Time (in ms) to transalte to carousel slide if transition isn't complete |
| lockSlides | boolean | false | Block the swiping |
| initialSlide | number | 0 | Index number on initial carrousel |
| mode | string | "horizontal" | Can you init carousel in 'horizontal' or 'vertical' mode |

#### Example
example to use input parameters to init carousel component with 30 angle.

*note : you can use a variable to set angle.*
```
<carousel-component [angle]=30 >
    <div class="item-carousel">a</div>
    <div class="item-carousel">b</div>
    <div class="item-carousel">c</div>
    <div class="item-carousel">d</div>
    <div class="item-carousel">e</div>
    <div class="item-carousel">f</div>
</carousel-component>
```

#### [Preview](https://embed.plnkr.co/oQzPhfdxzPZ4ejg2OYQr/)

*if you want the carrousel more little, you can play with ``ratioScale`` and ``perspective`` parameter*

### Outputs (Events)
*All events return the carousel by argument on callback function, in table you can see what event return carousel only or event too*
 
| Event | argument |Description |
| ------ | ------ | ------ |
| onInit | carousel | Event will carousel component initialize |
| onReady | carousel | Event will carousel component is ready |
| onChangeProperties | Property (SimpleChanges) | Event will properties of carousel changes |
| onSlideChange | carousel | Event will be fired when slide change |
| onSlideCentered | carousel | Event will be fired when actual slide are centered |
| onTransitionStart | js event && carousel | Event will be fired in the beginning of transition. normally when you up finger and the slide isn't collocate |
| onTransitionEnd | js event && carousel | Event will be fired after transition. |
| onSlideNextTransitionStart | js event && carousel | Same as "onTransitionStart" but for "forward" direction only |
| onSlideNextTransitionEnd | js event && carousel | Same as "onTransitionEnd" but for "forward" direction only |
| onSlidePrevTransitionStart | js event && carousel | Same as "onTransitionEnd" but for "backward" direction only |
| onSlidePrevTransitionEnd | js event && carousel | Same as "onTransitionEnd" but for "backward" direction only |
| onTouchMove | js event && carousel | Event will be fired when user move carrousel |
| onTouchStart | js event && carousel | Event will be fired when user start to move the carousel |
| onTouchEnd | js event && carousel | Event will be fired when user finish to move the carousel |
| onSlideMove | hammer event && carousel | Event will be fired when user touch and move finger over carousel and move it |
| onSlideMoveEnd | hammer event && carousel | Event will be fired when user stop move finger over carousel |
| onSlideMoveStart | hammer event && carousel | Event will be fired when user start move finger over carousel |
| onReachBeginning | carousel | Event will be fired when Swiper reach its beginning (initial position) |
| onReachEnd | carousel | Event will be fired when Swiper reach last slide |

#### Example
example to use output event when slideTransitionEnd.

*note : use a function created in your component that where you want to receive the event*

```
<carousel-component (onSlideChangeEnd)="slideChangeEndFn($event)" >
    <div class="item-carousel">a</div>
    <div class="item-carousel">b</div>
    <div class="item-carousel">c</div>
    <div class="item-carousel">d</div>
    <div class="item-carousel">e</div>
    <div class="item-carousel">f</div>
</carousel-component>
```
#### [Preview](https://embed.plnkr.co/gVAvihaAcPyuzV2QTypp/)

### Functions & Properties

After we initialize Carrousel we have its initialized instance in variable (like topCarousel variable in example above) with helpful methods and properties:

##### functions
| Event | Description |
| ------ | ------ |
| slideNext() | Function to move the carousel to next slide|
| slidePrev() | Function to move the carousel to previous slide|
| slideTo(index) | Function to move the carousel to index slide|
| toggleMode() | Change to 'horizontal' or 'vertical' mode |
| update() | You should call it if you want update the carousel |
| lockCarousel(value) | Function for lock carousel swiper (True / False)|


##### Properties
*the current properties of carousel it's inside carousel variable, **the others properties of functions are Input or Outputs parameters***
| Params | Type | Description |
| ------ | ------ | ------ |
| currdeg | number | Actual deg of our carousel |
| activeIndex | number | Index number of currently active slide |
| degreesSlides | Array | Degrees where are our carousel slides |
| items | Array | Elements HTML in carousel |
| lastIndex | number | Last Index number active slide |
| lockSlides | Boolean | Carousel swipe status, if is blocked |
| totalItems | number | Total items in carousel |


#### Example
you need init the component in template setting a identificator like this:
```
<carousel-component #topCarousel>
    <div class="item-carousel">a</div>
    <div class="item-carousel">b</div>
</carousel-component>
```

In your component you need get the carousel component like this:
```
import {Component, ViewChild} from '@angular/core';
import {CarouselComponent} from "angular2-carousel";

@Component({
  selector: 'foo-component',
  templateUrl: 'foo.component.html'
})
export class fooComponent{

   @ViewChild('topCarousel') topCarousel: CarouselComponent;
   constructor() {}

  fooNextSlide() {
    this.topCarousel.slideNext();
  }
}
```
and you can call the `slideNext` function like `fooNextSlide`

#### [Preview](https://embed.plnkr.co/1TYQm9E8L3lTTIHmONVJ/)

### Style Carrousel
You can set your style in your component without problems
#### [Preview](https://embed.plnkr.co/kGuXVLQBhqAO4KHLuMFV/)



### Author
Alex Marcos Gutierrez
TMTFactory
### License
MIT