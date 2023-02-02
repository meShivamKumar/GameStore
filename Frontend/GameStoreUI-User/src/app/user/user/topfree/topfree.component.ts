import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'gs-topfree',
  templateUrl: './topfree.component.html',
  styleUrls: ['./topfree.component.scss'],
})
export class TopfreeComponent implements OnInit {
  data: any = [];
  constructor(
    private gamesService: GamesService,
    private router: Router,
    private shared: SharedService
  ) {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.gamesService.getSomeFreeGames().subscribe((res) => {
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
