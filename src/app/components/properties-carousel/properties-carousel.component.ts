import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from "angular2-carousel";

@Component({
  selector: 'app-properties-carousel',
  templateUrl: './properties-carousel.component.html',
  styleUrls: ['../simple-carousel/simple-carousel.component.css']
})
export class PropertiesCarouselComponent implements OnInit,OnChanges {

  constructor() { }
  public time=300;
  public mode='horizontal';
  public perspective=2000;
  public init = 0;

  @ViewChild('topCarousel') topCarousel: CarouselComponent;
  ngOnInit() {
  }
  ngOnChanges(sample){

    console.log(sample);
  }

  reset(){
    console.log("click",this);
    this.topCarousel.reInit();
  }

}
