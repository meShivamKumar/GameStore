import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss'],
})
export class TopChartComponent implements OnInit {
  data: any[] = [];
  constructor(
    private gameService: GamesService,
    private router: Router,
    private shared: SharedService
  ) {}

  ngOnInit(): void {
    this.getTopChartGame();
  }

  getTopChartGame() {
    this.gameService.getHomeTopChart().subscribe((res) => {
      this.data = res.games;
    });
  }

  viewGame(gameId: string) {
    this.router.navigate(['user/game-detail'], {
      queryParams: { gameId: gameId },
    });
    this.shared.changeGameId(gameId);
  }
}
