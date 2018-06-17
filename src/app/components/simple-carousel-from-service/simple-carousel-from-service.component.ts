import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from "angular2-carousel";
import {SimpleCarouselService} from "./simple-carousel-from-service.service";

@Component({
  selector: 'app-simple-carousel-from-service',
  templateUrl: './simple-carousel-from-service.component.html',
  styleUrls: ['./simple-carousel-from-service.component.css']
})
export class SimpleCarouselFromServiceComponent implements OnInit {


    public images;

    constructor(private carouselService : SimpleCarouselService) {
      this.carouselService.getImagesEmitter.subscribe(val => {
        this.images = val;
      })
    }



    @ViewChild('topCarousel') topCarousel: CarouselComponent;

    toggle(){
      this.topCarousel.toggleMode();
    }

    ngOnInit() {
      setTimeout(function(){this.carouselService.getImages()}.bind(this),4000)
      setTimeout(function(){
        const elm = Object.assign([],this.images);
        this.images.push(elm[2]);
        this.images.push(elm[3]);
      }.bind(this),7000) 
    }

}
