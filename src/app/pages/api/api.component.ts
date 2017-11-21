import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor() { }
  showParameterExample = false;
  showPropertiesExample = false;
  showOutputExample = false;
  parameterHtml= `
    \< carousel-component [angle]=30" \>
      \< div class="item-carousel"\>a\< /div \>
      \< div class="item-carousel"\>b\< /div \>
      \< div class="item-carousel"\>c\< /div \>
      \< div class="item-carousel"\>d\< /div \>
      \< div class="item-carousel"\>e\< /div \>
      \< div class="item-carousel"\>f\< /div \> 
    \< /carousel-component \>
  `;
  outputHtml= `
    \< carousel-component (onSlideChangeEnd)="slideChangeEndFn($event)" \>
      \< div class="item-carousel"\>a\< /div \>
      \< div class="item-carousel"\>b\< /div \>
      \< div class="item-carousel"\>c\< /div \>
      \< div class="item-carousel"\>d\< /div \>
      \< div class="item-carousel"\>e\< /div \>
      \< div class="item-carousel"\>f\< /div \> 
    \< /carousel-component \>
  `;
  propertiesHtml = `
    \< carousel-component #topCarousel \>
      \< div class="item-carousel" \> a \< /div \>
      \< div class="item-carousel" \> b \< /div \>
    \< /carousel-component \>
  `;
  propertiesController= `
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
  `;



  ngOnInit() {
  }

}
