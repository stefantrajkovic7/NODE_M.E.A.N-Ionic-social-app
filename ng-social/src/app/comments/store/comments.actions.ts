import { Action } from '@ngrx/store';

export enum CommentsActionTypes {
    LoadComments = '[Comments] Load Comments',
    LoadCommentsSuccess = '[Comments] Load Comments Successfully',
    LoadCommentsFail = '[Comments] Load Comments Failed',
    CreateComment = '[Comments] Create Comment',
    CreateCommentSuccess = '[Comments] Created Comment Successfully',
    CreateCommentFail = '[Comments] Create Comment Failed'
}

/**
 * POSTS Actions
 */
export class LoadComments implements Action {
    readonly type = CommentsActionTypes.LoadComments;
    // constructor(public payload: any) { }
}

export class LoadCommentsSuccess implements Action {
    readonly type = CommentsActionTypes.LoadCommentsSuccess;
    constructor(public payload: any) { }
}

export class LoadCommentsFail implements Action {
    readonly type = CommentsActionTypes.LoadCommentsFail;
    constructor(public payload: any) { }
}

export class CreateComment implements Action {
    readonly type = CommentsActionTypes.CreateComment;
    constructor(public payload: any) { }
}

export class CreateCommentSuccess implements Action {
    readonly type = CommentsActionTypes.CreateCommentSuccess;
    constructor(public payload: any) { }
}

export class CreateCommentFail implements Action {
    readonly type = CommentsActionTypes.CreateCommentFail;
    constructor(public payload: any) { }
}

export type CommentsListActionsUnion =
    | LoadComments
    | LoadCommentsSuccess
    | LoadCommentsFail
    | CreateComment
    | CreateCommentSuccess
    | CreateCommentFail
