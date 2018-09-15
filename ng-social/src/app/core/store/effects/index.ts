import { Injectable, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router, NavigationExtras } from '@angular/router';
import { Actions, Effect, ofType  } from '@ngrx/effects';

import {
  AuthActionsUnion,
  AuthActionTypes,
  Register,
  RegisterSuccess,
  RegisterFail,
  Login,
  LoginSuccess,
  LoginFail,
  LoadUser,
  LoadUserSuccess,
  LoadUserFail
} from '../actions';

import { User } from '../../models';

import {catchError, map, switchMap, retry} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { AuthCookieService } from '../../services/auth-cookie.service';

@Injectable()
export class CoreEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    @Inject(AuthCookieService) private cookieService: AuthCookieService,
    private router: Router,
  ) {}


  @Effect()
  register$: Observable<Action> = this.actions
    .ofType(AuthActionTypes.Register)
    .pipe(
      map((action: any) => action.payload),
      switchMap(payload => {
        return this.authService.createUser(payload)
          .pipe(
            retry(3),
            map(user => {
              this.cookieService.setToken(user.token);
              this.router.navigate(['/streams']);
              return new RegisterSuccess({ payload: user })
            }),
            catchError(error => of(new RegisterFail({message: error})))
          )
      })
    );

  @Effect()
  login$: Observable<Action> = this.actions
    .ofType(AuthActionTypes.Login)
    .pipe(
      map((action: any) => action.payload),
      switchMap(payload => {
        return this.authService.loginUser(payload)
          .pipe(
            retry(3),
            map(user => {
              this.cookieService.setToken(user.token);
              this.router.navigate(['/streams'])
              return new LoginSuccess({ payload: user })
            }),
            catchError(error => of(new LoginFail({message: error})))
          )
      })
    );
    
    
  @Effect({ dispatch: false })
  logOut$: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.Logout),
    tap(() => {
      this.cookieService.deleteToken()
      window.location.replace("/");
    })
  );  
    
  @Effect()
  loadSelectedUser$: Observable<Action> = this.actions
    .ofType(AuthActionTypes.LoadUser)
    .pipe(
      map((action: LoadUser) => action.payload),
      switchMap((payload: any) =>
        this.authService.getUser(payload).pipe(retry(3),
          map((result: any) => new LoadUserSuccess(result)),
          catchError(error => of(new LoadUserFail(error)))
        ))
  );

}