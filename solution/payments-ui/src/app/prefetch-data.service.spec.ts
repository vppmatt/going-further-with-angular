import { TestBed } from '@angular/core/testing';

import { PrefetchDataService } from './prefetch-data.service';

describe('PrefetchDataService', () => {
  let service: PrefetchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefetchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
