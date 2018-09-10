import { Action } from '@ngrx/store';

export enum PostsActionTypes {
    LoadPosts = '[Streams] Load Posts',
    LoadPostsSuccess = '[Streams] Load Posts Successfully',
    LoadPostsFail = '[Streams] Load Posts Failed',
}

/**
 * POSTS Actions
 */
export class LoadPosts implements Action {
    readonly type = PostsActionTypes.LoadPosts;
    constructor(public payload: any) { }
}

export class LoadPostsSuccess implements Action {
    readonly type = PostsActionTypes.LoadPostsSuccess;
    constructor(public payload: any) { }
}

export class LoadPostsFail implements Action {
    readonly type = PostsActionTypes.LoadPostsFail;
    constructor(public payload: any) { }
}

export type PostsListActionsUnion =
    | LoadPosts
    | LoadPostsSuccess
    | LoadPostsFail
