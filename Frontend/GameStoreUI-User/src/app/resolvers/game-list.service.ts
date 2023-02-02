import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { GamesService } from '../services/games.service';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class GameListService implements Resolve<any> {
  gameName: string = '';
  category: string = '';

  constructor(
    private shared: SharedService,
    private gameService: GamesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.gameName = route.queryParams['name'];
    this.category = route.queryParams['category'];
if(route.queryParams['name']){
    this.shared.searhKey.subscribe((res) => {
      this.gameName = res;
      if (this.gameName.length > 0) {
        return this.gameService.getByName(1, this.gameName);
      } else {
        return this.gameService.getAllGames();
      }
    });
  }
  else{
    this.shared.currentCategory.subscribe((value) => {
      this.category = value;
      if (this.category === 'all') {
        return this.gameService.getAllGames();
      } else {
        return this.gameService
        .getCategoryGamesByPage(1, this.category);
      }
    });
  }
}
}
