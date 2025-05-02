import { TestBed } from '@angular/core/testing';

import { DynamicControlResolverService } from './dynamic-control-resolver.service';

describe('DynamicControlResolverService', () => {
  let service: DynamicControlResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicControlResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
