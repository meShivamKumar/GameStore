import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { LoginService } from 'src/app/services/login.service';
import { HealthService } from 'src/app/services/health.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  loggedIn: boolean = false;
  searchString: string = '';
  constructor(
    private loginService: LoginService,
    private globalService: GlobalService,
    private router: Router,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.checkUser();
  }

  search(event: any) {
    this.sharedService.sendSearchKey(event);
    this.router.navigate(['/user/game-list'], {
      queryParams: {
        category: 'all',
        name: event,
      },
    });
  }
  signOut() {
    this.loginService.setLogin(false);
    this.globalService.removeData();
    this.loggedIn = false;
  }

  checkUser() {
    this.loggedIn = this.loginService.checkIsLoggedIn();
    console.log(this.loggedIn);
  }

  login() {
    this.router.navigate(['login']);
  }
}
