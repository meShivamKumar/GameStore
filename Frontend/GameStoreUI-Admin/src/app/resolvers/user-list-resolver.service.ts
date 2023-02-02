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
export class UserListResolverService implements Resolve<any> {
  constructor(private userService: UsersService) {}

  resolve(): Observable<any> {
    return this.userService.getUsers();
  }
}
