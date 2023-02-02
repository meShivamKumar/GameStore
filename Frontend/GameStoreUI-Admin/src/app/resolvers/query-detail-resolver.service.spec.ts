import { TestBed } from '@angular/core/testing';

import { QueryDetailResolverService } from './query-detail-resolver.service';

describe('QueryDetailResolverService', () => {
  let service: QueryDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
