import { TestBed } from '@angular/core/testing';

import { TransportManagerGuard } from './transport-manager.guard';

describe('TransportManagerGuard', () => {
  let guard: TransportManagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TransportManagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
