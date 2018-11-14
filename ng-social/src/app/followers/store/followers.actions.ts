import { Action } from '@ngrx/store';

export enum FollowersActionTypes {
    LoadFollowers = '[Followers] Load Followers',
    LoadFollowersSuccess = '[Followers] Load Followers Successfully',
    LoadFollowersFail = '[Followers] Load Followers Failed'
}

/**
 * FOLLOWERS Actions
 */
export class LoadFollowers implements Action {
    readonly type = FollowersActionTypes.LoadFollowers;
}

export class LoadFollowersSuccess implements Action {
    readonly type = FollowersActionTypes.LoadFollowersSuccess;
    constructor(public payload: any) { }
}

export class LoadFollowersFail implements Action {
    readonly type = FollowersActionTypes.LoadFollowersFail;
    constructor(public payload: any) { }
}

export type FollowersListActionsUnion =
    | LoadFollowers
    | LoadFollowersSuccess
    | LoadFollowersFail
