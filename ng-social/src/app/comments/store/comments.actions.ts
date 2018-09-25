import { Action } from '@ngrx/store';

export enum CommentsActionTypes {
    LoadComments = '[Comments] Load Comments',
    LoadCommentsSuccess = '[Comments] Load Comments Successfully',
    LoadCommentsFail = '[Comments] Load Comments Failed'
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

export type CommentsListActionsUnion =
    | LoadComments
    | LoadCommentsSuccess
    | LoadCommentsFail
