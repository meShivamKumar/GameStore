import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() {}

  checkIsLoggedIn() {
    return this.isLoggedIn;
  }

  setLogin(val: boolean) {
    this.isLoggedIn = val;
  }
}
