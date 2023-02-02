import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDetailResolverService implements Resolve<any> {
  email: string = '';
  constructor(private userService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.email = route.queryParams['email'];
    return this.userService.getUserByEmail(this.email);
  }
}
