import { TestBed } from '@angular/core/testing';

import { UserDetailResolverService } from './user-detail-resolver.service';

describe('UserDetailResolverService', () => {
  let service: UserDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
