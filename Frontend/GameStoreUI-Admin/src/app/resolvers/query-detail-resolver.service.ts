import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QueryService } from '../services/query.service';

@Injectable({
  providedIn: 'root',
})
export class QueryDetailResolverService implements Resolve<any> {
  email: string = '';
  constructor(private queryService: QueryService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.email = route.queryParams['email'];
    return this.queryService.getQueryByEmail(this.email);
  }
}
