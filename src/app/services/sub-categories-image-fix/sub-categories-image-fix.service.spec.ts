import { TestBed } from '@angular/core/testing';

import { SubCategoriesImageFixService } from './sub-categories-image-fix.service';

describe('SubCategoriesImageFixService', () => {
  let service: SubCategoriesImageFixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCategoriesImageFixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
