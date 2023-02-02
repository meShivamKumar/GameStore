import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  email: string = '';
  constructor(
    private http: HttpService,
    private globalService: GlobalService
  ) {}

  getDetail(email: string) {
    return this.http.getRequest('User/' + email);
  }

  checkLogin(email: string) {
    return this.http.getRequest('User/Login/' + email);
  }
  setUserGame(gameId: string) {
    return this.http.updateRequest(
      'User/' + this.globalService.getEmail() + '/' + gameId,
      null
    );
  }

  addUser(data: any) {
    return this.http.postRequest('User', data);
  }
}
