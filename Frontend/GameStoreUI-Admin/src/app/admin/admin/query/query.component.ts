import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
})
export class QueryComponent implements OnInit {
  data: any = {};

  constructor(private routes: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.data = this.routes.snapshot.data['queryData'];
  }
  viewQuery(email: string) {
    this.router.navigate(['admin/view-query'], {
      queryParams: { email: email },
    });
  }
}
