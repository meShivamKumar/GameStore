import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  data: any = {};
  userExist: boolean = false;
  constructor(
    private loginService: LoginService,
    private GlobalService: GlobalService,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit() {}

  checkValidity() {
    this.userService.checkLogin(this.data.userEmail).subscribe((res) => {
      if (res != null) {
        this.loginService.setLogin(true);
        this.GlobalService.setData(res);
        this.router.navigate(['user']);
      } else {
        alert('User Does not Exist! Create New Account');
        this.userExist = false;
        this.data = {};
      }
    });
  }

  toggleExist() {
    if (this.userExist) {
      this.userExist = false;
      this.data = {};
    } else {
      this.userExist = true;
      this.data = {};
    }
  }
  back() {
    this.router.navigate(['user/home']);
  }
  addUser() {
    this.userService.addUser(this.data).subscribe((res) => {
      if (res != null) {
        this.loginService.setLogin(true);
        this.GlobalService.setData(res);
        this.router.navigate(['user']);
      } else {
        alert("Your Account can't be created! contact Admin");
      }
    });
  }
}
