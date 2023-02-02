import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpService) {}

  getAdmins() {
    return this.http.getRequest('admin');
  }

  LoginAdmin(email: string, pass: string) {
    return this.http.getRequest('admin/' + email + '/' + pass);
  }
  addAdmin(data: any) {
    return this.http.postRequest('admin', data);
  }
  changePassword(id: string, data: any) {
    return this.http.updateRequest('admin/' + id, data);
  }
  deleteAdmin(id: string) {
    return this.http.deleteRequest('admin/' + id);
  }
}
