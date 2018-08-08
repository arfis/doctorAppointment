
import { Injectable } from '@angular/core';

import {
  RootStoreState,
  DoctorStoreActions,
  DoctorStoreSelectors
} from '../root-store';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class MatrixResolver implements Resolve<any> {

  constructor(private store$: Store<RootStoreState.State>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    const {id, version} = route.params;

  }
}
