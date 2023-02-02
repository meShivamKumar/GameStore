import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-raise-query',
  templateUrl: './raise-query.component.html',
  styleUrls: ['./raise-query.component.scss'],
})
export class RaiseQueryComponent implements OnInit{
  data: any = {};
  constructor(private queryService: QueryService, private router: Router,private globalService:GlobalService) {}

  ngOnInit(): void {
      this.data.userEmail=this.globalService.getEmail();
  }
  addQuery() {
    this.queryService.addQuery(this.data).subscribe((res) => {
      alert("Query Raised! Wait for Admin's Reply");
      this.back();
    });
  }

  back() {
    this.router.navigate(['user/query']);
  }
}
