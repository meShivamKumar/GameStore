import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  pageNumber: number = 1;
  size: number = 4;
  constructor(
    private http: HttpService,
    private globalService: GlobalService
  ) {}

  getAllGames() {
    return this.http.getRequest('Game/' + this.pageNumber + '/' + this.size);
  }

  getGamesByPage(pageNumber: number) {
    return this.http.getRequest('Game/' + pageNumber + '/' + this.size);
  }

  getCategoryGamesByPage(pageNumber: number, category: string) {
    return this.http.getRequest(
      'Game/' + pageNumber + '/' + this.size + '?category=' + category
    );
  }

  getByName(pageNumber: number,name: string) {
    return this.http.getRequest(
      'Game/' + pageNumber + '/' + this.size + '?name=' + name
    );
  }

  getAllTopChartGames() {
    return this.http.getRequest(
      'Game/' + this.pageNumber + '/' + this.size + '?topChart=true'
    );
  }

  getAllRecommendedGames() {
    return this.http.getRequest(
      'Game/' + this.pageNumber + '/' + this.size + '?recommended=true'
    );
  }

  getAllPopularGames() {
    return this.http.getRequest(
      'Game/' + this.pageNumber + '/' + this.size + '?popular=true'
    );
  }

  getSomeFreeGames() {
    return this.http.getRequest('Game/' + this.pageNumber + '/5?free=true');
  }
  getAllFreeGames() {
    return this.http.getRequest(
      'getResponse?pageNumber=' +
        this.pageNumber +
        '&size=' +
        this.size +
        '&free=true'
    );
  }

  getAllPaidGames() {
    return this.http.getRequest(
      'Game/' + this.pageNumber + '/' + this.size + '?free=false'
    );
  }

  getHomeTopChart() {
    return this.http.getRequest(
      'Game/' + this.pageNumber + '/4/?topChart=true'
    );
  }

  getHomeRecommendedGames() {
    return this.http.getRequest(
      'Game/' + this.pageNumber + '/4?recommended=true'
    );
  }
  getHomePopularGames() {
    return this.http.getRequest('Game/' + this.pageNumber + '/4?popular=true');
  }

  getCategories() {
    return this.http.getRequest('Game/Categories');
  }

  getByCategory(category: string) {
    return this.http.getRequest(
      'Game/' + this.pageNumber + '/' + this.size + '?category=' + category
    );
  }

  getGameDetail(gameId: string) {
    return this.http.getRequest('Game/' + gameId);
  }
}
