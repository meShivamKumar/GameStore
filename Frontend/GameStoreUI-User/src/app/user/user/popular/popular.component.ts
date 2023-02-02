import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'gs-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit {
  data: any[] = [];
  constructor(private gameService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.getPopularGame();
  }

  getPopularGame() {
    this.gameService.getHomePopularGames().subscribe((res) => {
      this.data = res.games;
    });
  }

  viewGame(gameId: string) {
    this.router.navigate(['user/game-detail'], {
      queryParams: { gameId: gameId },
    });
  }
}
