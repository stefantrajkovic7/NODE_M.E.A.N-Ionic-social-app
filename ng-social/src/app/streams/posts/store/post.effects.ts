import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType  } from '@ngrx/effects';

import {
  PostsActionTypes,
  PostsListActionsUnion,
  CreatePost,
  CreatePostSuccess,
  CreatePostFail
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

  @Effect()
  register$: Observable<Action> = this.actions
    .ofType(PostsActionTypes.CreatePost)
    .pipe(
      map((action: any) => action.payload),
      switchMap(payload => {
        return this.postService.createPost(payload)
          .pipe(
            retry(3),
            map(post => new CreatePostSuccess({ payload: post })),
            catchError(error => of(new CreatePostFail({message: error})))
          )
      })
    );
    

}