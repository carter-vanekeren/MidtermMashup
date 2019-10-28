import { TestBed } from '@angular/core/testing';

import { CoindeskService } from './coindesk.service';

describe('CoindeskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoindeskService = TestBed.get(CoindeskService);
    expect(service).toBeTruthy();
  });
});
