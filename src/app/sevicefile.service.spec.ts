import { TestBed } from '@angular/core/testing';

import { SevicefileService } from './sevicefile.service';

describe('SevicefileService', () => {
  let service: SevicefileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevicefileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
