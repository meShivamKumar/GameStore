import { Router } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(
    private GlobalService: GlobalService,
    private loginService: LoginService,
    private router: Router
  ) {}
  signOut() {
    this.loginService.setLogin(false);
    this.GlobalService.removeData();
    this.router.navigate(['login']);
  }
}
