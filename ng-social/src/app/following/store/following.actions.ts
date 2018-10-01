import { Action } from '@ngrx/store';

export enum FollowingActionTypes {
    LoadFollowers = '[Following] Load Followers',
    LoadFollowersSuccess = '[Following] Load Followers Successfully',
    LoadFollowersFail = '[Following] Load Followers Failed'
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

export type FollowingListActionsUnion =
    | LoadFollowers
    | LoadFollowersSuccess
    | LoadFollowersFail
