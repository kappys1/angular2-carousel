import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from "angular2-carousel";

@Component({
  selector: 'app-cube-carousel',
  templateUrl: './cube-carousel.component.html',
  styleUrls: ['./cube-carousel.component.css']
})
export class CubeCarouselComponent implements OnInit {

  constructor() { }

  @ViewChild('topCarousel') topCarousel: CarouselComponent;

  toggle(){
    this.topCarousel.toggleMode();
  }

  ngOnInit() {
  }
}
