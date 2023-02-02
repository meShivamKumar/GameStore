import { TestBed } from '@angular/core/testing';

import { GameListResolverService } from './game-list-resolver.service';

describe('GameListResolverService', () => {
  let service: GameListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
