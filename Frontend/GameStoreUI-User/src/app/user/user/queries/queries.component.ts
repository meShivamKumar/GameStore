import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss'],
})
export class QueriesComponent implements OnInit {
  data: any = {};
  constructor(
    private queryService: QueryService,
    private globalService: GlobalService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getQuery();
  }
  getQuery() {
    this.queryService
      .getQuery(this.globalService.getEmail())
      .subscribe((res) => {
        this.data = res;
      });
  }
  back() {
    this.router.navigate(['user/home']);
  }

  addQuery() {
    this.router.navigate(['user/raise-query']);
  }
}
