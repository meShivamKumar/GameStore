import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  category: any[] = [];
  value: string = 'Home';

  constructor(
    private gameService: GamesService,
    private router: Router,
    private shared: SharedService
  ) {}
  ngOnInit(): void {
    this.category = [];
    this.getCategory();
  }

  getCategory() {
    this.gameService.getCategories().subscribe((res: any) => {
      var category = res.category;
      console.log(category);

      for (let i = 0; i < category.length; i++) {
        if (res.category[i] != null) {
          console.log();

          this.category.push(res.category[i]);
        }
      }
      console.log(this.category);
    });
  }
  sendData(category: string) {
    this.shared.changeCategory(category);
    this.viewGameList(category);
  }

  viewGameList(category: string) {
    this.router.navigate(['user/game-list'], {
      queryParams: { category: category },
    });
  }
  check() {
    if (this.value != 'Home') {
      this.sendData(this.value);
    } else {
      this.router.navigate(['user/home']);
    }
  }
}
