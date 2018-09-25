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
  LoadPostsFail,
  AddLikeSuccess,
  AddLikeFail
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
    map((action: LoadPosts) => action),
    // switchMap((payload: number) => -- for pagination later ToDo
    switchMap(() =>
      this.postService.getPosts().pipe(
        retry(3),
        map((result: any) => new LoadPostsSuccess(result.posts)),
        catchError(error => of(new LoadPostsFail(error)))
      )
    )
  );

  @Effect()
  createPost$: Observable<Action> = this.actions
    .ofType(PostsActionTypes.CreatePost)
    .pipe(
      map((action: any) => action.payload),
      switchMap(payload => {
        return this.postService.createPost(payload)
          .pipe(
            retry(3),
            map(post => {
              return new CreatePostSuccess({ payload: post })
            }),
            catchError(error => of(new CreatePostFail({message: error})))
          )
      })
  );

  @Effect()
  addLike$: Observable<Action> = this.actions
    .ofType(PostsActionTypes.AddLike)
    .pipe(
      map((action: any) => action.payload),
      switchMap(payload => {
        return this.postService.addLike(payload)
          .pipe(
            retry(3),
            map(like => {
              return new AddLikeSuccess({ payload: like })
            }),
            catchError(error => of(new AddLikeFail({message: error})))
          )
      })
  );
    

}