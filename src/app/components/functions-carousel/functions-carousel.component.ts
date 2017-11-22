import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from "angular2-carousel";

@Component({
  selector: 'app-functions-carousel',
  templateUrl: './functions-carousel.component.html',
  styleUrls: ['../simple-carousel/simple-carousel.component.css']
})
export class FunctionsCarouselComponent implements OnInit {

  constructor() { }


  @ViewChild('topCarousel') topCarousel: CarouselComponent;
  ngOnInit() {
  }

  prev(){
    this.topCarousel.slidePrev();
  }
  next(){
    this.topCarousel.slideNext();
  }
}
