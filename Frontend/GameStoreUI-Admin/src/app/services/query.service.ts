import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpService) {}

  getQueries() {
    return this.http.getRequest('Contacts');
  }
  getQueryByEmail(email: string) {
    return this.http.getRequest('Contacts/' + email);
  }
  reply(email: string, data: any) {
    return this.http.updateRequest('Contacts/' + email, data);
  }
  deleteQuery(email: string) {
    return this.http.deleteRequest('Contacts/' + email);
  }
}
