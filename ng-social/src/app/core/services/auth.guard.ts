import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanLoad, Route } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { isAuthenticated } from "../store";
import { Logout } from "../store/actions";
import { take, tap, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<any>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.pipe(
      select(isAuthenticated),
      take(1),
      map((data) => {
        if(data) {
          return true
        } else {
            this.router.navigate(['/'])
        }
        
      }))
    // observable.subscribe(authenticated => {
    //   if (!authenticated) {
    //     this.store.dispatch(new Logout())
    //   }
    // });
  }

  // canLoad(route: Route) {
  //   const observable = this.store.select(isAuthenticated);
  //   observable.subscribe(authenticated => {
  //     if (!authenticated) {
  //       this.store.dispatch(new Logout())
  //       this.router.navigate(['/'])
  //     }
  //   });
  //   return this.store.select(isAuthenticated).pipe(take(1));
  // }
    
}