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
} from './notifications.actions';

import {catchError, map, switchMap, retry} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NotificationsService } from '../services/notifications.service';

@Injectable()
export class NotificationsEffects {

  constructor(
    private actions: Actions,
    private notificationsService: NotificationsService,
    private router: Router,
  ) {}

}