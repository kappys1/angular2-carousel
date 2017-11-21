import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesCarouselComponent } from './properties-carousel.component';

describe('PropertiesCarouselComponent', () => {
  let component: PropertiesCarouselComponent;
  let fixture: ComponentFixture<PropertiesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
