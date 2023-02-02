import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private cat = new Subject<string>();
  currentCategory = this.cat.asObservable();
  private route = new Subject<string>();
  currentGameId = this.route.asObservable();
  private searchSubject = new Subject<string>();
  searhKey = this.searchSubject.asObservable();
  constructor() {}

  changeCategory(value: string) {
    this.cat.next(value);
  }

  changeGameId(value: string) {
    this.route.next(value);
  }

  sendSearchKey(value: string) {
    this.searchSubject.next(value);
  }
}
