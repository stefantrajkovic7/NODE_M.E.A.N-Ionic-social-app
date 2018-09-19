import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType  } from '@ngrx/effects';

import {
  PostsActionTypes,
  PostsListActionsUnion,
  CreatePost,
  CreatePostSuccess,
  CreatePostFail,
  LoadPosts,
  LoadPostsSuccess,
  LoadPostsFail
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
  loadPosts$: Observable<Action> = this.actions.ofType(PostsActionTypes.LoadPosts).pipe(
    map((action: LoadPosts) => action.payload),
    // switchMap((payload: number) => -- for pagination later ToDo
    switchMap(() =>
      this.postService.getPosts().pipe(
        retry(3),
        map((result: any) => new LoadPostsSuccess(result)),
        catchError(error => of(new LoadPostsFail(error)))
      )
    )
  );
    

}