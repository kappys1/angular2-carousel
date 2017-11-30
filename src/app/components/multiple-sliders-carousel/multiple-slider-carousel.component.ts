import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from "angular2-carousel";

@Component({
  selector: 'app-multiple-slider-carousel',
  templateUrl: './multiple-slider-carousel.component.html',
  styleUrls: ['./multiple-slider-carousel.component.css']
})
export class MultipleSliderCarouselComponent implements OnInit {

  constructor() {

  }
  @ViewChild('topCarousel') topCarousel: CarouselComponent;
  public degree = 25;
  public moreSlides = 3;
  toggle(){
    this.topCarousel.toggleMode();
  }

  ngOnInit() {
  }

}
