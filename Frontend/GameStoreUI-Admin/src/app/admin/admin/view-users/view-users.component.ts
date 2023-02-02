import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss'],
})
export class ViewUsersComponent implements OnInit {
  data: any = {};
  pageNumber: number = 1;
  size: number = 10;
  totalElements: number = 0;
  totalPages: number = 0;
  userName: string = '';
  userEmail: string = '';

  constructor(
    private httpservice: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.data = this.route.snapshot.data['userList'];
    console.log(this.data);

    this.totalElements = this.data.totalElements;
    this.totalPages = this.data.totalPages;
  }

  getData(pageNumber: any) {
    console.log(pageNumber);
    this.pageNumber = pageNumber;
    this.userService.getUsersByPage(pageNumber).subscribe((res) => {
      console.log(res);
      this.data = res;
      this.totalElements = this.data.totalElements;
      this.totalPages = this.data.totalPages;
    });
  }

  viewUser(id: string) {
    this.router.navigate(['/admin/viewUser'], { queryParams: { email: id } });
  }

  pageChanged(event: any) {
    console.log(event.value);
  }

  deleteUser() {
    this.userService.deleteUser(this.userEmail).subscribe((res) => {
      this.getData(this.pageNumber);
    });
  }

  setUser(email: string, name: string) {
    this.userEmail = email;
    this.userName = name;
  }
}
