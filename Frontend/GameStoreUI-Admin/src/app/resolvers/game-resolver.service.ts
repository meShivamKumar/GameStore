import { GamesService } from 'src/app/services/games.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { IgameDetail } from '../interfaces/IgameDetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameResolverService implements Resolve<IgameDetail> {
  gameId: string = '';
  constructor(
    private GamesService: GamesService,
    private route: ActivatedRoute
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IgameDetail> {
    this.gameId = route.queryParams['gameId'];

    return this.GamesService.getDetail( this.gameId);
  }
}
