import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-view-query',
  templateUrl: './view-query.component.html',
  styleUrls: ['./view-query.component.scss'],
})
export class ViewQueryComponent implements OnInit {
  data: any = {};
  reply: any = {};
  btnText: string = 'Reply';
  color: string = 'warning';
  isReplying: boolean = false;
  alreadyReplied: boolean = false;
  constructor(
    private routes: ActivatedRoute,
    private queryService: QueryService,
    private router: Router
  ) {}
  ngOnInit() {
    this.data = this.routes.snapshot.data['queryDetail'];
    console.log(this.data);
    if (this.data.reply != null) {
      this.alreadyReplied = true;
    }
  }

  toggleReply() {
    if (this.isReplying) {
      this.isReplying = false;
      this.btnText = 'Reply';
      this.color = 'warning';
    } else {
      this.isReplying = true;
      this.btnText = 'Cancel';
      this.color = 'dark';
    }
  }

  deleteQuery(email:string) {
    this.queryService.deleteQuery(email).subscribe((res)=>{
      this.back();
    })
  }

  replyUser() {
    this.queryService
      .reply(this.data.userEmail, this.reply)
      .subscribe((res) => {
        this.alreadyReplied = true;
        this.toggleReply();
        this.data = res;
        console.log(res);
      });
  }

  back() {
    this.router.navigate(['admin/query']);
  }
}
