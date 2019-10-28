import { TestBed } from '@angular/core/testing';

import { EtsyService } from './etsy.service';

describe('EtsyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtsyService = TestBed.get(EtsyService);
    expect(service).toBeTruthy();
  });
});
