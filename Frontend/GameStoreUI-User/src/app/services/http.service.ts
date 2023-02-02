import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private global: GlobalService) {}
  webServer: string = this.global.serverAddress;
  getRequest(url: string) {
    return this.http.get<any>(this.webServer + url);
  }

  postRequest(url: string, data: any) {
    return this.http.post(this.webServer + url, data);
  }

  updateRequest(url: string, data: any) {
    return this.http.put(this.webServer + url, data);
  }

  deleteRequest(url: string) {
    return this.http.delete(this.webServer + url);
  }
}
