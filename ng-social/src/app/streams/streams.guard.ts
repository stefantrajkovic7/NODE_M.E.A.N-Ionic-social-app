import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap} from 'rxjs/operators';

import * as PostActions from './posts/store/post.actions';
import * as fromAuth from '../core/store';
import { AuthCookieService } from '../core/services/auth-cookie.service';

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable()
export class StreamsGuard implements CanActivate {
  user: any;

  constructor(
    private store: Store<any>,
    private auth: AuthCookieService,
    private router: Router
  ) {
     this.user =  this.auth.getUser()
    // this.id = store.pipe(select(fromAuth.getUser)).subscribe(user => user.user._id);
    // console.log(this.user.data._id + 'IDDDD')
   }

  /**
   * This method tries to load a Survey with the given ID from the store
   * if it is not in the store, returning dispatch a new load action.
   */
  getFromStoreOrApi(): Observable<any> {
    return this.store.pipe(
      tap(() => {
        this.store.dispatch(new PostActions.LoadUser(this.user.data._id));
      }),
      map(User => !!User),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      }));
  }

  /**
   * This is the actual method the router will call when our guard is run.
   *
   * Our guard waits for the item to load, then it checks if we need
   * to request a Survey from the API or if we already have it in our cache.
   * If it finds it in the cache or in the API, it returns an Observable
   * of `true` and the route is rendered successfully.
   *
   * If it was unable to find it in our cache or in the API, this guard
   * will return an Observable of `false`, causing the router to move
   * on to the next candidate route. In this case, it will move on
   * to the 404 page.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.getFromStoreOrApi().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)));
  }
}
