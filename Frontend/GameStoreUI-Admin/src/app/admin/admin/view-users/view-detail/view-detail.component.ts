import { UsersService } from './../../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss'],
})
export class ViewDetailComponent implements OnInit {
  data: any = {};
  email: string = '';
  constructor(
    private httpservice: HttpService,
    private UsersService: UsersService,
    private router: Router,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.data = this.routes.snapshot.data['userDetail'];

    // this.routes.queryParams.subscribe((p: any) => {
    //   this.email = p.email;
    // });
    // this.getUserDetails(this.email);
  }

  getUserDetails(email: string) {
    this.httpservice
      .getRequest('user/getUserByEmail?Email=' + email)
      .subscribe((res) => {
        this.data = res;
        console.log(res);
      });
    console.log(email);
  }

  viewGame(gameid: string) {
    this.router.navigate(['/admin/game-detail'], {
      queryParams: { gameId: gameid },
    });
  }
}
