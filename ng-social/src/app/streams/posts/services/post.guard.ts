import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { take, tap, map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { PostService } from "./post.service";

@Injectable()
export class PostGuard implements CanActivate {
  constructor(private store: Store<any>, private postService: PostService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // const token = this.authCookieService.getToken();
    return true
    // if (token) {
    //   return true
    // } else {
    // }
  }
    
}