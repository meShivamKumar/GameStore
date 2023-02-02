import { TestBed } from '@angular/core/testing';

import { QueryListResolverService } from './query-list-resolver.service';

describe('QueryListResolverService', () => {
  let service: QueryListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
