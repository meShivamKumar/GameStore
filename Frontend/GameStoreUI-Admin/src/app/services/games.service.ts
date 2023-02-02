import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  pageNumber: number = 1;
  size: number = 10;
  constructor(private http: HttpService) {}

  getGames() {
    return this.http.getRequest('Game/' + this.pageNumber + '/' + this.size);
  }

  getGamesByPage(pageNumber: number) {
    return this.http.getRequest('Game/' + pageNumber + '/' + this.size);
  }
  getDetail(gameId: string) {
    return this.http.getRequest('Game/' +gameId);
  }
  publishGame(data: any) {
    return this.http.postRequest('Game', data);
  }
  updateGame(id: string, data: any) {
    return this.http.updateRequest('Game/' + id, data);
  }
  deleteGame(id: string) {
    return this.http.deleteRequest('Game/' + id);
  }
}
