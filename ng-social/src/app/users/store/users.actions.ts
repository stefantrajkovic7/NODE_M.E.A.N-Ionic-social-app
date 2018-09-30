import { Action } from '@ngrx/store';

export enum UsersActionTypes {
    LoadUsers = '[Users] Load Users',
    LoadUsersSuccess = '[Users] Load Users Successfully',
    LoadUsersFail = '[Users] Load Users Failed',
    FollowingAction = '[Users] Following Action',
    FollowingActionSuccess = '[Users] Following Action Successfull',
    FollowingActionFail = '[Users] Following Action Failed',
}

/**
 * USERS Actions
 */
export class LoadUsers implements Action {
    readonly type = UsersActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
    readonly type = UsersActionTypes.LoadUsersSuccess;
    constructor(public payload: any) { }
}

export class LoadUsersFail implements Action {
    readonly type = UsersActionTypes.LoadUsersFail;
    constructor(public payload: any) { }
}

export class FollowingAction implements Action {
    readonly type = UsersActionTypes.FollowingAction;
    constructor(public payload: any) { }
}

export class FollowingActionSuccess implements Action {
    readonly type = UsersActionTypes.FollowingActionSuccess;
    constructor(public payload: any) { }
}

export class FollowingActionFail implements Action {
    readonly type = UsersActionTypes.FollowingActionFail;
    constructor(public payload: any) { }
}

export type UsersListActionsUnion =
    | LoadUsers
    | LoadUsersSuccess
    | LoadUsersFail
    | FollowingAction
    | FollowingActionSuccess
    | FollowingActionFail
