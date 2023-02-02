import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  constructor(private GlobalService: GlobalService) {}

  checkLogin() {
    return this.isLoggedIn;
  }

  setLogin(value: boolean) {
    this.isLoggedIn = value;
  }
}
