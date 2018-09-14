import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap} from 'rxjs/operators';

import { ServiceProxy, SurveyModel } from 'pulse-lib';
import * as SurveyActions from '../../../core/store/surveys/surveys.actions';
import * as fromSurveys from '../../../core/store/surveys';

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable()
export class SurveyExistsGuard implements CanActivate {
  id: any;

  constructor(
    private store: Store<fromSurveys.State>,
    private serviceProxy: ServiceProxy,
    private router: Router
  ) { }

  /**
   * This method tries to load a Survey with the given ID from the store
   * if it is not in the store, returning dispatch a new load action.
   */
  getFromStoreOrApi(): Observable<any> {
    return this.store.pipe(
      select(fromSurveys.getSelectedSurvey),
      tap(() => {
        this.store.dispatch(new SurveyActions.LoadSurvey(id));
      }),
      map(Survey => !!Survey),
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
