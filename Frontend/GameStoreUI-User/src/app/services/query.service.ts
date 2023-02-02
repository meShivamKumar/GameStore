import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(
    private http: HttpService,
    private globalService: GlobalService
  ) {}

  getQuery(email: string) {
    return this.http.getRequest('Contacts/' + email);
  }

  addQuery(data: any) {
    return this.http.postRequest('Contacts', data);
  }
}
