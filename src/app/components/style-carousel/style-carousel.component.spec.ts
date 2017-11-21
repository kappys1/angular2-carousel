import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleCarouselComponent } from './style-carousel.component';

describe('StyleCarouselComponent', () => {
  let component: StyleCarouselComponent;
  let fixture: ComponentFixture<StyleCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
