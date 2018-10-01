import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType  } from '@ngrx/effects';

import {
  LoadFollowers,
  LoadFollowersSuccess,
  LoadFollowersFail
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

}