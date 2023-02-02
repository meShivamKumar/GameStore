import { Router } from '@angular/router';
import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  data: any = {};
  constructor(
    private loginService: LoginService,
    private GlobalService: GlobalService,
    private adminService: AdminService,
    private router: Router
  ) {}
  ngOnInit() {}

  checkValidity() {
    this.adminService
      .LoginAdmin(this.data.email, this.data.pass)
      .subscribe((res) => {
        if (res != null) {
          this.loginService.setLogin(true);
          this.GlobalService.setData(res);
          this.router.navigate(['admin/users']);
        } else {
          alert('Credentials Are Wrong! Contact Administrator');
          this.data = {};
        }
      });
  }
}
