import { Action } from '@ngrx/store';

export enum FollowingActionTypes {
    LoadFollowers = '[Following] Load Followers',
    LoadFollowersSuccess = '[Following] Load Followers Successfully',
    LoadFollowersFail = '[Following] Load Followers Failed',
    UnFollowUser = '[Following] UnFollow User',
    UnFollowUserSuccess = '[Following] UnFollow User Success',
    UnFollowUserFail = '[Following] UnFollow User Fail',
}

/**
 * FOLLOWING Actions
 */
export class LoadFollowers implements Action {
    readonly type = FollowingActionTypes.LoadFollowers;
}

export class LoadFollowersSuccess implements Action {
    readonly type = FollowingActionTypes.LoadFollowersSuccess;
    constructor(public payload: any) { }
}

export class LoadFollowersFail implements Action {
    readonly type = FollowingActionTypes.LoadFollowersFail;
    constructor(public payload: any) { }
}

export class UnFollowUser implements Action {
    readonly type = FollowingActionTypes.UnFollowUser;
    constructor(public payload: any) { }
}

export class UnFollowUserSuccess implements Action {
    readonly type = FollowingActionTypes.UnFollowUserSuccess;
    constructor(public payload: any) { }
}

export class UnFollowUserFail implements Action {
    readonly type = FollowingActionTypes.UnFollowUserFail;
    constructor(public payload: any) { }
}

export type FollowingListActionsUnion =
    | LoadFollowers
    | LoadFollowersSuccess
    | LoadFollowersFail
