import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { isAuthenticated } from "../store";
import { Logout } from "../store/actions";
import { take, tap, map } from 'rxjs/operators';
import { AuthCookieService } from "./auth-cookie.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<any>, private authCookieService: AuthCookieService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.authCookieService.getToken();

    if (token) {
      return true
    } else {
        this.store.dispatch(new Logout())
        return false
    }
  }
    
}