import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType  } from '@ngrx/effects';

import {
  LoadFollowers,
  LoadFollowersSuccess,
  LoadFollowersFail,
  FollowingActionTypes,
  UnFollowUser,
  UnFollowUserSuccess,
  UnFollowUserFail
} from './following.actions';

import {catchError, map, switchMap, retry} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FollowingService } from '../services/following.service';

@Injectable()
export class FollowingEffects {

  constructor(
    private actions: Actions,
    private followingService: FollowingService,
    private router: Router,
  ) {}

  @Effect()
  unFollowingAction$: Observable<Action> = this.actions
    .ofType(FollowingActionTypes.UnFollowUser)
    .pipe(
      map((action: UnFollowUser) => action.payload),
      switchMap((payload: any) => {
        return this.followingService.unFollow(payload._id)
          .pipe(
            retry(3),
            map(follow => {
              return new UnFollowUserSuccess({ payload: follow })
            }),
            catchError(error => of(new UnFollowUserFail({message: error})))
          )
      })
  );

}