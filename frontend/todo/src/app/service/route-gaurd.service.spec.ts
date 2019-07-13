import { TestBed } from '@angular/core/testing';

import { RouteGaurdService } from './route-gaurd.service';

describe('RouteGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGaurdService = TestBed.get(RouteGaurdService);
    expect(service).toBeTruthy();
  });
});
