import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  data: any = {};
  gameId: string = '';
  category: string = '';
  gameName: string = '';
  pageNumber: number = 1;
  size: number = 4;
  totalElements: number = 0;
  totalPages: number = 0;
  isCategory: boolean = false;
  isSearching: boolean = false;
  constructor(
    private gameService: GamesService,
    private router: Router,
    private routes: ActivatedRoute,
    private shared: SharedService
  ) {}
  ngOnInit() {
    // this.data = this.routes.snapshot.data['gameList'];
    // console.log(this.data);

    // this.totalElements = this.data.totalElements;
    // this.totalPages = this.data.totalPages;
    // this.routes.queryParams.subscribe((p: any) => {
    //   this.category = p.category;
    //   this.gameName = p.gameName;
    //   if (this.gameName.length > 0) {
    //     this.isSearching = true;
    //   }
    // });
    this.shared.currentCategory.subscribe((value) => {
      this.category = value;
      if (this.category === 'all') {
        this.isCategory = false;
        this.pageNumber = 1;
        this.totalElements = 0;
        this.totalPages = 0;
        this.getAllGames();
      } else {
        this.isCategory = true;
        this.pageNumber = 1;
        this.totalElements = 0;
        this.totalPages = 0;
        this.getCategoryGames(this.category);
      }
    });

    this.shared.searhKey.subscribe((res: string) => {
      this.gameName = res;
      if (this.gameName.length > 0) {
        this.isSearching = true;
        this.searchGame(1);
      } else {
        this.isSearching = false;
        this.isCategory = false;
        this.pageNumber = 1;
        this.totalElements = 0;
        this.totalPages = 0;
        this.getAllGames();
      }
    });
  }

  getByPage(pageNumber: any) {
    this.pageNumber = pageNumber;
    this.gameService.getGamesByPage(pageNumber).subscribe((res) => {
      this.data = res;
      this.totalElements = this.data.totalElements;
      this.totalPages = this.data.totalPages;
    });
  }

  getByCategoryPage(pageNumber: any) {
    this.pageNumber = pageNumber;
    this.gameService
      .getCategoryGamesByPage(pageNumber, this.category)
      .subscribe((res) => {
        this.data = res;
        this.totalElements = this.data.totalElements;
        this.totalPages = this.data.totalPages;
      });
  }

  getAllGames() {
    this.gameService.getAllGames().subscribe((res) => {
      this.data = res;
      this.totalElements = this.data.totalElements;
      this.totalPages = this.data.totalPages;
    });
  }

  searchGame(pageNumber: any) {
    this.pageNumber=pageNumber;
    this.gameService.getByName(pageNumber, this.gameName).subscribe((res) => {
      this.data = res;
      this.totalElements = this.data.totalElements;
      this.totalPages = this.data.totalPages;
    });
  }

  getCategoryGames(category: string) {
    this.gameService.getByCategory(category).subscribe((res) => {
      this.data = res;
      this.totalElements = this.data.totalElements;
      this.totalPages = this.data.totalPages;
    });
  }
  viewGame(gameId: string) {
    this.router.navigate(['user/game-detail'], {
      queryParams: { gameId: gameId },
    });
  }
}
