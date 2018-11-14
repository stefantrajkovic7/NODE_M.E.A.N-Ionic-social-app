import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType  } from '@ngrx/effects';

import {
  LoadFollowers,
  LoadFollowersSuccess,
  LoadFollowersFail,
  FollowersActionTypes
} from './followers.actions';

import {catchError, map, switchMap, retry} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FollowersService } from '../services/followers.service';

@Injectable()
export class FollowersEffects {

  constructor(
    private actions: Actions,
    private followingService: FollowersService,
    private router: Router,
  ) {}

}