import { TestBed } from '@angular/core/testing';

import { AdminListResolverService } from './admin-list-resolver.service';

describe('AdminListResolverService', () => {
  let service: AdminListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
