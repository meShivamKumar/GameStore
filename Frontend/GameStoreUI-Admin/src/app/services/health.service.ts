import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { GlobalService } from './global.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  constructor(
    private adminService: AdminService,
    private globalService: GlobalService,
    private loginService: LoginService,
    private router: Router
  ) {}

  checkSession() {
    let data = this.globalService.getData();
    console.log(data);

    if (data != null) {
      this.checkValidity(data.email,data.pass);
    }
  }

  checkValidity(email: string,pass:string) {
    this.adminService.LoginAdmin(email,pass).subscribe((res) => {
      if (res != null) {
        this.loginService.setLogin(true);
        this.globalService.setData(res);
        this.router.navigate(['admin/users']);
      } else {
        this.loginService.setLogin(false);
      }
    });
  }
}
