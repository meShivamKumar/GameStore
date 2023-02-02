import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { GamesService } from '../services/games.service';

@Injectable({
  providedIn: 'root',
})
export class EditGameResolverService implements Resolve<any> {
  constructor(private gameService: GamesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id:any = route.paramMap.get('id');
    return this.gameService.getDetail(id);
  }
}
