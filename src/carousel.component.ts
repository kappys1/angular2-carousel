/**
 * :tmtfactory) © 2017
 * Alex Marcos <alejandro.marcos@tmtfactory.com>
 * @ignore
 */
import {
    AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
    ViewChild
  } from '@angular/core';
import * as Hammer from 'hammerjs';
import {Carousel} from "./Carousel";



@Component({
    selector: 'carousel-component',
    styles: [`
        :host{
            display: flex;
        }
        :host .container {
            margin: 0 auto;
            width: 600px;
            height: 400px;
            position: relative;
        }


        :host .container .carousel {
            height: 100%;
            width: 100%;
            position: absolute;
            -webkit-transform-style: preserve-3d;
            -moz-transform-style: preserve-3d;
            -o-transform-style: preserve-3d;
            transform-style: preserve-3d;
 
        }
        :host.ready .carousel {
            -webkit-transition: -webkit-transform 300ms;
            -moz-transition:-moz-transform 300ms;
            -o-transition: -o-transform 300ms;
            transition: transform 300ms;
        }
        :host .container .carousel ::content >>> .item-carousel {
            display: block;
            position: absolute;
            border:1px solid black;
            width: 100%;
            height: 100%;
            text-align: center;
            transform-style: preserve-3d;
            opacity: 0;
        }
        :host.ready .carousel ::content >>> .item-carousel {
            -webkit-transition: opacity 300ms, -webkit-transform 300ms;
            -moz-transition: opacity 300ms, -moz-transform 300ms;
            -o-transition: opacity 300ms, -o-transform 300ms;
            transition: opacity 300ms, transform 300ms;
        }
        
        :host .container .carousel ::content >>> .item-carousel img{
            user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
        
        :host .container .carousel ::content >>> .item-carousel.next,
        :host .container .carousel ::content >>> .item-carousel.prev,
        :host .container .carousel ::content >>> .item-carousel.actual{
            opacity: 0.95;
        }


    `],

    template: '<div class="container" #container>\n' +
    '  <div class="carousel" #carousel  (domChange)="onDomChange($event)">\n' +
    '    <ng-content  select=".item-carousel"></ng-content>\n' +
    '  </div>\n' +
    '</div>',
})


// TODO: move chart.js to it's own component
export class CarouselComponent implements OnInit,OnChanges,AfterViewInit {

  public carousel : Carousel;
  //carrousel radious
  private radius:any;
  private rotationFn : string;
  private itemsCarouselRendered : number =  0 ;
  @Input("morePairSlides") morePairSlides = 1;
  @Input("angle") angle = 45;
  @Input("ratioScale") ratioScale = 1;
  @Input("margin") margin = 20;
  @Input("perspective") perspective = 2000;
  @Input("endInSlide") endInSlide = true;
  @Input("timeToSlide") timeToSlide = 300;
  @Input("lockSlides") lockSlides = false;
  @Input("initialSlide") initialSlide = 0;
  @Input("loop") loop = false;
  @Input("mode") axis = "horizontal";

  //autoPlay
  @Input("autoPlay") autoPlay = false;
  @Input("delayAutoPlay") delayAutoPlay = 3000;
  private autoPlayTimeout : any;

  @Output("onInit") onInitCarousel = new EventEmitter();
  @Output("onReady") onReadyCarousel = new EventEmitter();
  @Output("onChangeProperties") onChangePropertiesCarousel = new EventEmitter();

  @Output("onSlideChange") onSlideChange = new EventEmitter();
  @Output("onSlideCentered") onSlideCentered = new EventEmitter();

  @Output("onTransitionStart") onTransitionStart = new EventEmitter();
  @Output("onTransitionEnd") onTransitionEnd = new EventEmitter();
  @Output("onSlideNextTransitionStart") onSlideNextTransitionStart = new EventEmitter();
  @Output("onSlideNextTransitionEnd") onSlideNextTransitionEnd = new EventEmitter();
  @Output("onSlidePrevTransitionStart") onSlidePrevTransitionStart = new EventEmitter();
  @Output("onSlidePrevTransitionEnd") onSlidePrevTransitionEnd = new EventEmitter();

  @Output("onSlideMove") onSlideMove = new EventEmitter();
  @Output("onSlideMoveEnd") onSlideMoveEnd = new EventEmitter();
  @Output("onSlideMoveStart") onSlideMoveStart = new EventEmitter();

  @Output("onTouchMove") onTouchMove = new EventEmitter();
  @Output("onTouchStart") onTouchStart = new EventEmitter();
  @Output("onTouchEnd") onTouchEnd = new EventEmitter();

  @Output("onReachBeginning") onReachBeginning = new EventEmitter();
  @Output("onReachEnd") onReachEnd = new EventEmitter();

  @ViewChild("carousel") carouselElm: ElementRef;
  @ViewChild("container") containerElm: ElementRef;



  constructor(private componentElement:ElementRef){
    this.carousel = new Carousel();
  }

  onDomChange($event : any){
    if($event.addedNodes.length > 0){
      if(this.itemsCarouselRendered === 0){
        this.reInit();
      }
      else{
        this.update();
        this.updateCssShowSlides();
      }
      this.itemsCarouselRendered = this.carouselElm.nativeElement.getElementsByClassName("item-carousel").length;
    }
  }

  ngOnInit(){
    this.onInitCarousel.emit(this.carousel);
    this.itemsCarouselRendered = this.carouselElm.nativeElement.getElementsByClassName("item-carousel").length
  }

  ngOnChanges(changes : SimpleChanges){
    for(let i=0;i<Object.keys(changes).length;i++){
        if(changes[Object.keys(changes)[i]].currentValue != changes[Object.keys(changes)[i]].previousValue && !changes[Object.keys(changes)[i]].isFirstChange()){
            this.update();
            this.onChangePropertiesCarousel.emit(changes);
        }
    }

  }

  ngAfterViewInit() {
    this.initEventsPan();
    this.configPlugin();
    setTimeout( function(){
        this.componentElement.nativeElement.className += ' ready';
    }.bind(this));
    this.onReadyCarousel.emit(this.carousel);
  }

  public lockCarousel(val : boolean){
    this.carousel.lockSlides = val;
  }

  public slideNext(){
    if(this.checkLimitsCarrousel(this.carousel.activeIndex+1)){
      this.moveSlideTo(this.carousel.activeIndex+1);
      let vm = this;
      setTimeout( () =>  vm.detectCurrentSlide());
    }
  }
  public slidePrev(){
    if(this.checkLimitsCarrousel(this.carousel.activeIndex-1)){
      this.moveSlideTo(this.carousel.activeIndex-1);
      let vm = this;
      setTimeout( () =>  vm.detectCurrentSlide());
    }
  }
  public slideTo(index : number){
    if(this.checkLimitsCarrousel(index)){
      this.moveSlideTo(index);
      let vm = this;
      setTimeout( () =>  vm.detectCurrentSlide());
    }
  }

  public autoPlayStart(){
      this.autoPlay=true;
      this.autoPlaySlide();
  }
  public autoPlayStop(){
      clearInterval(this.autoPlayTimeout);
      this.carousel.autoPlayIsRunning = false;
  }
  public toggleMode(){
      this.axis = this.axis == "vertical"? "horizontal":"vertical";
      this.update();

  }

  public reInit(){
    this.carousel = new Carousel;
    this.configPlugin();
  }

  public update(){
      this.setPerspectiveContainer();
      this.checkRotation();
      this.carousel.items = Array.from(this.carouselElm.nativeElement.getElementsByClassName("item-carousel"));
      this.carousel.totalItems = this.carousel.items.length;
      this.getmaxSizes();
      this.carousel.lockSlides = this.lockSlides;
      this.setDegreesOnSlides();
      this.setTransformCarrousel(-this.carousel.degreesSlides[this.carousel.activeIndex]);
  }



  private configPlugin(){
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
  }


  private initEventsPan(){
      let hammertime = new Hammer(this.carouselElm.nativeElement);
      hammertime.on('pan', this.rotate.bind(this));
      hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL ,threshold:0});
  }

  private rotate(e : any){
    if(!this.carousel.lockSlides) {
        let velocity = this.carousel.isHorizontal ? e.velocityX : -e.velocityY;
        this.setNewDeg(this.carousel.currdeg + velocity*window.devicePixelRatio);
        this.moveCarrousel(this.carousel.currdeg);
        if (e.isFinal) {
            if (this.endInSlide) {
                this.moveSlideTo(this.carousel.activeIndex);
            }
        }
    }
  }

  private autoPlaySlide(){
    if(this.autoPlay){
        this.autoPlayTimeout = setTimeout(function () {
            this.carousel.autoPlayIsRunning = true;
            this.slideNext();
            this.autoPlaySlide();
        }.bind(this),this.delayAutoPlay);
    }
  }

  private initSlidesOn(){
    if(this.initialSlide >= 0 && this.initialSlide<this.carousel.items.length){
      this.carousel.activeIndex = parseInt(this.initialSlide.toString());
    }
    else if(this.initialSlide >= this.carousel.items.length){
      this.carousel.activeIndex = this.carousel.items.length-1;
      this.initialSlide = this.carousel.activeIndex;
    }
    else{
        this.carousel.activeIndex = 0;
        this.initialSlide = this.carousel.activeIndex;
    }

    let newDeg = this.carousel.activeIndex*this.angle;
    this.setNewDeg(-newDeg);
    this.setTransformCarrousel(-newDeg);
  }

  private setNewDeg(newDeg : number){
    this.carousel.currdeg = newDeg;
    if(this.carousel.currdeg > 0){
      this.carousel.currdeg = 0;
    }
    if(this.carousel.currdeg < -this.carousel.maxDegree){
      this.carousel.currdeg = -this.carousel.maxDegree;
    }

  }
  private checkRotation(){
      this.carousel.isHorizontal = this.axis !== "vertical";
      this.rotationFn = this.carousel.isHorizontal?'rotateY':'rotateX';
  }
  private checkLimitsCarrousel(index : number){
    return this.carousel.activeIndex != index && index >=0 && index < this.carousel.totalItems
  }

  private moveSlideTo(index : number){
    this.setNewDeg(-this.carousel.degreesSlides[index]);
    this.moveCarrousel(this.carousel.currdeg,this.timeToSlide);
  }

  private moveCarrousel(deg : number, timeTransform  : number =0){
    this.carouselElm.nativeElement.style.transition = "transform "+timeTransform+"ms";
    this.carouselElm.nativeElement.style.webkitTransition = "transform "+timeTransform+"ms";
    this.setTransformCarrousel(deg);
    this.detectCurrentSlide();

  }
  private setTransformCarrousel(deg : number){
    this.carouselElm.nativeElement.style.transform = "translateZ("+(-this.radius)+"px) "+this.rotationFn+"("+deg+"deg)";
    this.carouselElm.nativeElement.style.webkitTransform = "translateZ("+(-this.radius)+"px) "+this.rotationFn+"("+deg+"deg)";
    this.sendSlideIsCentered();
  }

  private sendSlideIsCentered(){
      if(this.carousel.currdeg == -this.carousel.degreesSlides[this.carousel.activeIndex]){
          this.onSlideCentered.emit(this.carousel)
      }
  }

  private setPerspectiveContainer(){
    this.containerElm.nativeElement.style.perspective = this.perspective;
    this.containerElm.nativeElement.style.webkitPerspective = this.perspective;
    this.containerElm.nativeElement.style.MozPerspective = this.perspective;
  }

  private getmaxSizes(){
    this.carousel.items.map((val : any) =>{
      let witdh = val.offsetWidth;
      let height = val.offsetHeight;
      this.carousel.maxWidthSize = 0;
      this.carousel.maxHeigthSize = 0;
      if( witdh > this.carousel.maxWidthSize){
        this.carousel.maxWidthSize = witdh;
          this.carousel.totalWidth = this.carousel.items.length*this.carousel.maxWidthSize;
      }
      if( height > this.carousel.maxHeigthSize){
        this.carousel.maxHeigthSize = height;
          this.carousel.totalWidth = this.carousel.items.length*this.carousel.maxHeigthSize;
      }
    });
    this.setContainerWithMaxSize();
  }
  private setContainerWithMaxSize(){
    this.containerElm.nativeElement.style.width = this.carousel.maxWidthSize+'px';
    this.containerElm.nativeElement.style.height = this.carousel.maxHeigthSize+'px';
  }
  private setDegreesOnSlides(){
    let auxDegree = 0;
    let panelSize = this.carousel.isHorizontal ? this.carousel.maxWidthSize:this.carousel.maxHeigthSize;
    this.radius = (Math.round( ( panelSize / 2 ) /
      Math.tan( Math.PI / (360/this.angle) ) )+this.margin);
    this.carousel.degreesSlides=[];
    this.carousel.items.map((val : any,index : number) =>{
      val.style.transform = this.rotationFn+"("+auxDegree+"deg) translateZ("+(this.radius)+"px)";
      val.style.webkitTransform = this.rotationFn+"("+auxDegree+"deg) translateZ("+(this.radius)+"px)";
      this.carousel.degreesSlides.push(auxDegree);
      this.carousel.maxDegree = auxDegree;
      auxDegree+=this.angle;
    });

  }

  private detectCurrentSlide(){
    let aux = 99e9;
    let index = 0;
    this.carousel.degreesSlides.forEach((val : any,i : number)=>{
      let res = Math.abs(val-Math.abs(this.carousel.currdeg));
      if(res<aux){
        aux = res;
        index = i;
      }
    });
    if(this.carousel.activeIndex != index){
      this.carousel.lastIndex =  this.carousel.activeIndex;
      this.carousel.activeIndex = index;
      this.updateCssShowSlides();

      this.onSlideChange.emit(this.carousel);
      if(this.carousel.activeIndex == 0){
          this.onReachBeginning.emit(this.carousel);
      }
      else if(this.carousel.activeIndex == this.carousel.totalItems-1){
          this.onReachEnd.emit(this.carousel);
      }
    }
  }

  private updateCssShowSlides(){
    let vm = this;
    let currentIndex = vm.carousel.activeIndex;
    let actual = this.carousel.items[currentIndex];
    vm.removeClassShowSlides("actual");
    vm.removeClassShowSlides("prev");
    vm.removeClassShowSlides("next");
    if(actual){
      actual.className += " actual";
    }
    for(let x=0;x < this.morePairSlides;x++){
        let prev = vm.carousel.items[currentIndex-(x+1)];
        let next = vm.carousel.items[currentIndex+(x+1)];
        if(prev){
          prev.className += " prev";
        }
        if(next){
          next.className += " next";
        }
    }
  }
  private removeClassShowSlides(tagClass : string){
    if(this.carouselElm.nativeElement.getElementsByClassName(tagClass).length > 0){
      Array.from(this.carouselElm.nativeElement.getElementsByClassName(tagClass)).map((val : any) => {
        val['classList'].remove(tagClass);
      })
    }
  }
  private manageEvents(){
    let options : any = {
      preventDefault: true
    };
    let vm = this;
    let hammertime = new Hammer(this.carouselElm.nativeElement, options);

    hammertime.on("panstart", function(e){
        vm.onSlideMoveStart.emit({ carousel:vm.carousel,event:e});
    });
    hammertime.on("panend", function(e){
        vm.onSlideMoveEnd.emit({ carousel:vm.carousel,event:e});
    });
    hammertime.on("pan", function(e){
        vm.onSlideMove.emit({carousel:vm.carousel,event:e});
    });


    this.carouselElm.nativeElement.addEventListener('touchstart', (e : any) =>{
        vm.onTouchStart.emit({carousel:vm.carousel,event:e});
    });
    this.carouselElm.nativeElement.addEventListener('touchmove', (e : any) =>{
        vm.onTouchMove.emit({carousel:vm.carousel,event:e});
    });
    this.carouselElm.nativeElement.addEventListener('touchend', (e : any) =>{
        vm.onTouchEnd.emit({ carousel:vm.carousel,event:e});
    });

    this.carouselElm.nativeElement.addEventListener('transitionend', (e : any) =>{
      let elm = {carousel:vm.carousel,event:e};
      if(e.propertyName === "transform"){
        this.onTransitionEnd.emit(elm);
        if(vm.carousel.lastIndex > vm.carousel.activeIndex){
          this.onSlideNextTransitionEnd.emit(elm);
        }
        else{
          this.onSlidePrevTransitionEnd.emit(elm);
        }
      }
    });

    this.carouselElm.nativeElement.addEventListener('transitionstart', (e : any) =>{
      let elm = {carousel:vm.carousel,event:e};
      if(e.propertyName === "transform"){
          this.onTransitionStart.emit(elm);
          if(e.direction === Hammer.DIRECTION_LEFT){
              vm.onSlideNextTransitionStart.emit(elm);
          }
          else if(e.direction === Hammer.DIRECTION_RIGHT){
              vm.onSlidePrevTransitionStart.emit(elm);
          }
      }
    });
    window.addEventListener("resize", function(){
        this.update();
    }.bind(this));

  }
}
