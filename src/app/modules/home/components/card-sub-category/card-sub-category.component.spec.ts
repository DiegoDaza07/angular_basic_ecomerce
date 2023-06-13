import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubCategoryComponent } from './card-sub-category.component';

describe('CardSubCategoryComponent', () => {
  let component: CardSubCategoryComponent;
  let fixture: ComponentFixture<CardSubCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSubCategoryComponent]
    });
    fixture = TestBed.createComponent(CardSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
