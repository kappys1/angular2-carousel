import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsCarouselComponent } from './functions-carousel.component';

describe('FunctionsCarouselComponent', () => {
  let component: FunctionsCarouselComponent;
  let fixture: ComponentFixture<FunctionsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
