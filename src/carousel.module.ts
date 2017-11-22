/**
 * :tmtfactory) © 2017
 * Alex Marcos <alejandro.marcos@tmtfactory.com>
 * @ignore
 */

import {NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'pan': { direction: Hammer.DIRECTION_ALL } // override default settings
  }
}

@NgModule({
  declarations: [
      CarouselComponent
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  exports: [CarouselComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselModule {}
