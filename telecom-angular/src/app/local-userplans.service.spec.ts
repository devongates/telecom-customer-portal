import { TestBed } from '@angular/core/testing';

import { LocalUserplansService } from './local-userplans.service';

describe('LocalUserplansService', () => {
  let service: LocalUserplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalUserplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
