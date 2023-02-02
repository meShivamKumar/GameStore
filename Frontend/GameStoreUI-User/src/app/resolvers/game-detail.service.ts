import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { GamesService } from '../services/games.service';

@Injectable({
  providedIn: 'root',
})
export class GameDetailService implements Resolve<any> {
  constructor(private gameService: GamesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let gameId = route.queryParams['gameId'];
    return this.gameService.getGameDetail(gameId);
  }
}
