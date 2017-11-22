import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  html = `
         import {CarouselModule} from "angular2-carousel";
        // In your App's module or Custom Module:
        @NgModule({
            imports: [
               CarouselModule
            ]
        })
  `;

  html2 = `
        \< carousel-component \>
            \< div class="item-carousel" \>a \< /div \>
            \< div class="item-carousel" \>
                \< div class="b" \>
                    \< img/ \>
                    .
                    .
                    .
                \< /div \>
            \< /div\>
            \< div class="item-carousel" \>c\< /div\>
            \< div class="item-carousel" \>d\< /div\>
          \< /carousel-component\>
      `;

  systemjsImport = "" +
    "System.config({\n" +
    "    map:{\n" +
    "        'hammerjs': 'npm:hammerjs@2.0.8/hammer.js',\n" +
    "        'angular2-carousel' : 'https://npmcdn.com/angular2-carousel/bundles/ng2-carousel-module.umd.js'\n" +
    "    }\n" +
    "})";
  constructor() {}

  ngOnInit() {
  }

}
