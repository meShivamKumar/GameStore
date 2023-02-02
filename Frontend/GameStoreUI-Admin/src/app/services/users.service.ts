import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  pageNumber: number = 1;
  size: number = 10;
  constructor(private http: HttpService) {}
  getAllUsers() {
    return this.http.getRequest('User');
  }

  getUsers() {
    return this.http.getRequest('User/' + this.pageNumber + '/' + this.size);
  }

  getUsersByPage(pageNumber: number) {
    return this.http.getRequest('User/' + pageNumber + '/' + this.size);
  }
  getUserByEmail(email: string) {
    return this.http.getRequest('User/' + email);
  }
  deleteUser(id: string) {
    return this.http.deleteRequest('User/' + id);
  }
}
