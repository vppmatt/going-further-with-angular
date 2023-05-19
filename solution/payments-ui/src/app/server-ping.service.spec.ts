import { TestBed } from '@angular/core/testing';

import { ServerPingService } from './server-ping.service';

describe('ServerPingService', () => {
  let service: ServerPingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerPingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
