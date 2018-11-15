import { Action } from '@ngrx/store';

export enum NotificationsActionTypes {
    MarkNotificationAction = '[Following] Load Followers',
    MarkNotificationActionSuccess = '[Following] Load Followers Successfully',
    MarkNotificationActionFail = '[Following] Load Followers Failed',
    DeleteNotification = '[Following] UnFollow User',
    UnFollowUserSuccess = '[Following] UnFollow User Success',
    UnFollowUserFail = '[Following] UnFollow User Fail',
}

/**
 * NOTIFICATIONS Actions
 */

export class MarkNotificationAction implements Action {
    readonly type = NotificationsActionTypes.UnFollowUser;
    constructor(public payload: any) { }
}

export class UnFollowUserSuccess implements Action {
    readonly type = NotificationsActionTypes.UnFollowUserSuccess;
    constructor(public payload: any) { }
}

export class UnFollowUserFail implements Action {
    readonly type = NotificationsActionTypes.UnFollowUserFail;
    constructor(public payload: any) { }
}

export type NotificationsListActionsUnion =
    | LoadFollowers
    | LoadFollowersSuccess
    | LoadFollowersFail
