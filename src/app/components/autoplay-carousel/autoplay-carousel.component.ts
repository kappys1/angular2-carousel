import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from "angular2-carousel";

@Component({
  selector: 'app-autoplay-carousel',
  templateUrl: './simple-carousel.component.html',
  styleUrls: ['./simple-carousel.component.css']
})
export class AutoplayCarouselComponent implements OnInit {

  constructor() {

  }
  @ViewChild('topCarousel') topCarousel: CarouselComponent;

  toggle(){
    this.topCarousel.toggleMode();
  }

  ngOnInit() {
  }

}
