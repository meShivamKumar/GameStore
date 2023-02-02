import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { GlobalService } from 'src/app/services/global.service';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  constructor(
    private routes: ActivatedRoute,
    private userService: UserService,
    private gameService: GamesService,
    private globalService: GlobalService,
    private shared: SharedService
  ) {}
  data: any = {};
  gameId: string = '';
  installed: boolean = false;
  ngOnInit(): void {
    this.data = this.routes.snapshot.data['gameDetail'];
    this.checkIfInstalled();
    this.shared.currentGameId.subscribe((value) => {
      this.gameId = value;
      this.getGameDetails(this.gameId);
     
    });

    // this.routes.queryParams.subscribe((p: any) => {
    //   this.gameId = p.gameId;
    // });
    // this.getGameDetails(this.gameId);
    // this.checkIfInstalled();
  }

  getGameDetails(gameId: string) {
    this.gameService.getGameDetail(gameId).subscribe((res) => {
      this.data = res;
      this.checkIfInstalled();
    });
  }

  checkIfInstalled() {
    this.userService
      .getDetail(this.globalService.getEmail())
      .subscribe((res) => {
        let games: any[] = res.games;

        for (let i = 0; i < games.length; i++) {
          if (this.data.gameId == games[i].gameId) {
            this.installed = true;
          } else {
            this.installed = false;
          }
        }
      });
  }
  downloadGame(gameId: string) {
    this.userService.setUserGame(gameId).subscribe((res) => {
      this.installed = true;
      this.getGameDetails(this.gameId);
    });
  }
}
