import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
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
} from '../actions';

import { User } from '../../models';

import {catchError, map, switchMap, retry} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';

@Injectable()
export class CoreEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}


  @Effect()
  register: Observable<Action> = this.actions
    .ofType(AuthActionTypes.Register)
    .pipe(
      map((action: Register) => action.payload),
      switchMap(payload => {
        return this.authService.createUser(payload)
          .pipe(
            retry(3),
            map(user => new RegisterSuccess({ payload: user })),
            catchError(error => of(new RegisterFail({message: error})))
          )
      })
    );

  @Effect()
  login: Observable<Action> = this.actions
    .ofType(AuthActionTypes.Login)
    .pipe(
      map((action: Login) => action.payload),
      switchMap(payload => {
        return this.authService.loginUser(payload)
          .pipe(
            retry(3),
            map(user => {
              sessionStorage.setItem('token', user.payload.token);
              return new LoginSuccess({ payload: user })
            }),
            catchError(error => of(new LoginFail({message: error})))
          )
      })
    ); 
    
  @Effect({ dispatch: false })
  logOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.Logout),
    tap(() => {
      sessionStorage.removeItem('token');
      // this.router
    })
  );  
    
    

}