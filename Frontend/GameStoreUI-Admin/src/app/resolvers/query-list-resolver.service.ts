import { QueryService } from './../services/query.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueryListResolverService implements Resolve<any> {
  constructor(private queryService: QueryService) {}

  resolve(): Observable<any> {
    return this.queryService.getQueries();
  }
}
