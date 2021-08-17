import { TestBed } from '@angular/core/testing';

import { LocalDevicesService } from './local-devices.service';

describe('LocalDevicesService', () => {
  let service: LocalDevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
