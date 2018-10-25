# Angular2-Carousel

[![npm version](https://badge.fury.io/js/angular2-carousel.svg)](https://badge.fury.io/js/angular2-carousel) [![Build Status](https://travis-ci.org/kappys1/angular2-carousel.svg?branch=master)](https://travis-ci.org/kappys1/angular2-carousel) [![Coverage Status](https://coveralls.io/repos/github/kappys1/angular2-carousel/badge.svg?branch=master)](https://coveralls.io/github/kappys1/angular2-carousel?branch=master)  ![Angular2+](https://img.shields.io/badge/Angular_2+-passing-brightgreen.svg?style=flat) ![Angular2+](https://img.shields.io/badge/Angular_5-success-brightgreen.svg?style=flat) ![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)

> An lightweight, touchable and responsive library to create a carousel for angular 2+

## Demo :bookmark_tabs:
> demos available [here](https://kappys1.github.io/angular2-carousel)

## Install :computer:
You can install the package from our npm package
```
 npm install --save angular2-carousel
```

*check if not install all peer dependencies:*
```
npm install @types/hammerjs
npm install hammerjs
```

## Usage :running:
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

*note : if you install library from github, you should import from ``angular2-carousel/dist``*

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

## API Documentation :books:
#### you can see [here](https://github.com/kappys1/angular2-carousel/wiki/API-Documentation) or in [web](https://kappys1.github.io/angular2-carousel)

### Author :man:
Alex Marcos Gutierrez
TMTFactory
### License
MIT
