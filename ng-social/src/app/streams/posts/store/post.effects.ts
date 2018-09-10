import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType  } from '@ngrx/effects';

import {
  PostsActionTypes,
  PostsListActionsUnion,
  CreatePost
} from './post.actions';

import {catchError, map, switchMap, retry} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PostService } from '../services/post.service';

@Injectable()
export class PostEffects {

  constructor(
    private actions: Actions,
    private postService: PostService,
    private router: Router,
  ) {}
    

}