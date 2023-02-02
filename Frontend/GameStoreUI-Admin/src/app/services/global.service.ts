import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  serverAddress: string = 'https://localhost:7281/';
  adminEmail: string = '';
  adminPass: string = '';
  constructor() {}

  getEmail() {
    return this.adminEmail;
  }

  getPassword() {
    return this.adminPass;
  }

  getData() {
    let data: any;
    data = localStorage.getItem('admin');
    return JSON.parse(data);
  }
  setData(data: any) {
    this.adminEmail = data.email;
    this.adminPass = data.pass;
    localStorage.setItem('admin', JSON.stringify(data));
  }

  removeData() {
    localStorage.removeItem('admin');
  }
}
