import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { GamesService } from '../services/games.service';

@Injectable({
  providedIn: 'root',
})
export class GameListResolverService implements Resolve<any> {
  constructor(private gameService: GamesService) {}

  resolve(): Observable<any> {
    return this.gameService.getGames();
  }
}
