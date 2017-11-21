import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeCarouselComponent } from './cube-carousel.component';

describe('CubeCarouselComponent', () => {
  let component: CubeCarouselComponent;
  let fixture: ComponentFixture<CubeCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
