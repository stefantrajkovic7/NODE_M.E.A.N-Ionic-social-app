import { Action } from '@ngrx/store';

export enum PostsActionTypes {
    LoadPosts = '[Streams] Load Posts',
    LoadPostsSuccess = '[Streams] Load Posts Successfully',
    LoadPostsFail = '[Streams] Load Posts Failed',
    CreatePost = '[Streams] Create Post]',
    CreatePostSuccess = '[Streams] Create Post Successfully]',
    CreatePostFail = '[Streams] Create Post Failed]',
    LoadUser = '[Streams] Load User',
    LoadUserSuccess = '[Streams] Load User Success',
    LoadUserFail = '[Streams] Load User Failed',
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

export class CreatePost implements Action {
    readonly type = PostsActionTypes.CreatePost;
    constructor(public payload: any) { }
}

export class CreatePostSuccess implements Action {
    readonly type = PostsActionTypes.CreatePostSuccess;
    constructor(public payload: any) { }
}

export class CreatePostFail implements Action {
    readonly type = PostsActionTypes.CreatePostFail;
    constructor(public payload: any) { }
}

export class LoadUser implements Action {
    readonly type = PostsActionTypes.LoadUser;
  
    constructor(public payload: any) { }
  }
  
  export class LoadUserSuccess implements Action {
    readonly type = PostsActionTypes.LoadUserSuccess;
  
    constructor(public payload: any) { }
  }
  
  export class LoadUserFail implements Action {
    readonly type = PostsActionTypes.LoadUserFail;
  
    constructor(public payload: any) { }
  }

export type PostsListActionsUnion =
    | LoadPosts
    | LoadPostsSuccess
    | LoadPostsFail
    | CreatePost
    | CreatePostSuccess
    | CreatePostFail
    | LoadUser
    | LoadUserSuccess
    | LoadUserFail
