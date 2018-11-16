import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType  } from '@ngrx/effects';

import {
  MarkNotificationAction,
  MarkNotificationActionSuccess,
  MarkNotificationActionFail,
  NotificationsActionTypes,
  DeleteNotification,
  DeleteNotificationSuccess,
  DeleteNotificationFail
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

  @Effect()
  MarkNotificationAction$: Observable<Action> = this.actions
    .ofType(NotificationsActionTypes.MarkNotificationAction)
    .pipe(
      map((action: MarkNotificationAction) => action.payload),
      switchMap((payload: any) => {
        return this.notificationsService.markNotification(payload)
          .pipe(
            retry(3),
            map(data => {
              return new MarkNotificationActionSuccess({ payload: data })
            }),
            catchError(error => of(new MarkNotificationActionFail({message: error})))
          )
      })
  );

  @Effect()
  DeleteNotification$: Observable<Action> = this.actions
    .ofType(NotificationsActionTypes.DeleteNotification)
    .pipe(
      map((action: DeleteNotification) => action.payload),
      switchMap((payload: any) => {
        return this.notificationsService.markNotification(payload, true)
          .pipe(
            retry(3),
            map(data => {
              return new DeleteNotificationSuccess({ payload: data })
            }),
            catchError(error => of(new DeleteNotificationFail({message: error})))
          )
      })
  );

}