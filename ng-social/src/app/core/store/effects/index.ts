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
    
    

}