import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  serverAddress: string = 'https://localhost:7281/';

  userEmail: string = '';
  userName: string = '';
  constructor() {}
  getEmail() {
    return this.userEmail;
  }

  getUserName() {
    return this.userName;
  }

  setData(data: any) {
    this.userEmail = data.userEmail;
    this.userName = data.userName;
    localStorage.setItem('user', JSON.stringify(data));
  }

  getData() {
    let user: any = localStorage.getItem('user');
    return JSON.parse(user);
  }

  removeData() {
    localStorage.removeItem('user');
    this.userEmail = '';
    this.userName = '';
  }
}
