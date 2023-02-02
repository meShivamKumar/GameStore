import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  constructor(
    private globalService: GlobalService,
    private userService: UserService,
    private loginService: LoginService
  ) {}

  checkUser() {
    let data: any = this.globalService.getData();
    console.log(data);

    this.userService.checkLogin(data.userEmail).subscribe((res) => {
      if (res != null) {
        this.globalService.setData(res);
        this.loginService.setLogin(true);
        console.log('true');
      } else {
        this.loginService.setLogin(false);
      }
    });
  }
}
