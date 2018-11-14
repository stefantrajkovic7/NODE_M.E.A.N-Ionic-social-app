import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap} from 'rxjs/operators';

import * as AuthActions from '../core/store/actions';
import { AuthCookieService } from '../core/services/auth-cookie.service';

@Injectable()
export class FollowersGuard implements CanActivate {
  user: any;

  constructor(
    private store: Store<any>,
    private auth: AuthCookieService,
    private router: Router
  ) {
     this.user =  this.auth.getUser()
   }

  /**
   * This method tries to load a Survey with the given ID from the store
   * if it is not in the store, returning dispatch a new load action.
   */
  getFromStoreOrApi(): Observable<any> {
    return this.store.pipe(
      tap(() => {
        this.store.dispatch(new AuthActions.LoadUser(this.user.data._id));
      }),
      map(User => !!User),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      }));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.getFromStoreOrApi().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)));
  }
}
