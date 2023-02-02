import { TestBed } from '@angular/core/testing';

import { EditGameResolverService } from './edit-game-resolver.service';

describe('EditGameResolverService', () => {
  let service: EditGameResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditGameResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
