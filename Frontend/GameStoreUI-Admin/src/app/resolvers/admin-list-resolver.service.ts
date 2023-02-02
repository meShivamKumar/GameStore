import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminListResolverService implements Resolve<any> {
  constructor(private adminService: AdminService) {}

  resolve(): Observable<any> {
    return this.adminService.getAdmins();
  }
}
