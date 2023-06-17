import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselImgsComponent } from './carousel-imgs.component';

describe('CarouselImgsComponent', () => {
  let component: CarouselImgsComponent;
  let fixture: ComponentFixture<CarouselImgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselImgsComponent]
    });
    fixture = TestBed.createComponent(CarouselImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
