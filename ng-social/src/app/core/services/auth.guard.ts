import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanLoad, Route } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { isAuthenticated } from "../store";
import { Logout } from "../store/actions";
import { take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private store: Store<any>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const observable = this.store.select(isAuthenticated);
    observable.subscribe(authenticated => {
      if (!authenticated) {
        this.store.dispatch(new Logout())
      }
    });
    return this.store.select(isAuthenticated).pipe(take(1));
  }

  canLoad(route: Route) {
    const observable = this.store.select(isAuthenticated);
    observable.subscribe(authenticated => {
      if (!authenticated) {
        this.store.dispatch(new Logout())
      }
    });
    return this.store.select(isAuthenticated).pipe(take(1));
  }
    
}