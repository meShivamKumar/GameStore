import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService implements Resolve<any> {
  constructor(
    private globalService: GlobalService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.userService.getDetail(this.globalService.getEmail());
  }
}
