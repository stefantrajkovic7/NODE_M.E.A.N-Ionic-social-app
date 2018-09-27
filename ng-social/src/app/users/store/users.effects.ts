import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType  } from '@ngrx/effects';

import {
  UsersActionTypes,
  UsersListActionsUnion,
  LoadUsers,
  LoadUsersSuccess,
  LoadUsersFail
} from './users.actions';

import {catchError, map, switchMap, retry} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {

  constructor(
    private actions: Actions,
    private usersService: UsersService,
    private router: Router,
  ) {}

}