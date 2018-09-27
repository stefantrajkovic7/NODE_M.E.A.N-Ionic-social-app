import { Action } from '@ngrx/store';

export enum UsersActionTypes {
    LoadUsers = '[Users] Load Users',
    LoadUsersSuccess = '[Users] Load Users Successfully',
    LoadUsersFail = '[Users] Load Users Failed'
}

/**
 * USERS Actions
 */
export class LoadUsers implements Action {
    readonly type = UsersActionTypes.LoadUsers;
    // constructor(public payload: any) { }
}

export class LoadUsersSuccess implements Action {
    readonly type = UsersActionTypes.LoadUsersSuccess;
    constructor(public payload: any) { }
}

export class LoadUsersFail implements Action {
    readonly type = UsersActionTypes.LoadUsersFail;
    constructor(public payload: any) { }
}

export type UsersListActionsUnion =
    | LoadUsers
    | LoadUsersSuccess
    | LoadUsersFail
