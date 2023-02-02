import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  data: any = {};
  pageNumber: number = 1;
  size: number = 10;
  totalElements: number = 0;
  totalPages: number = 0;
  gameName: string = '';
  gameId: string = '';
  constructor(
    private gamesService: GamesService,
    private router: Router,
    private routes: ActivatedRoute
  ) {}
  ngOnInit() {
    this.data = this.routes.snapshot.data['gameList'];
    this.totalElements = this.data.totalElements;
    this.totalPages = this.data.totalElements;
  }

  getGames(pageNumber: any) {
    this.pageNumber = pageNumber;
    this.gamesService.getGamesByPage(pageNumber).subscribe((res) => {
      this.data = res;
    });
  }
  
  viewGame(gameid: string) {
    this.router.navigate(['/admin/game-detail'], {
      queryParams: { gameId: gameid },
    });
  }

  setData(id: string, name: string) {
    this.gameId = id;
    this.gameName = name;
  }

  deleteGame() {
    this.gamesService.deleteGame(this.gameId).subscribe((res) => {});
  }

}
