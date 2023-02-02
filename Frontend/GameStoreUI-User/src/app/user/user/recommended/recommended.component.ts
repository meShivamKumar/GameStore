import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'gs-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
})
export class RecommendedComponent implements OnInit {
  data: any[] = [];
  constructor(private gameService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.getRecommendedGame();
  }

  getRecommendedGame() {
    this.gameService.getHomeRecommendedGames().subscribe((res) => {
      this.data = res.games;
    });
  }

  viewGame(gameId: string) {
    this.router.navigate(['user/game-detail'], {
      queryParams: { gameId: gameId },
    });
  }
}
