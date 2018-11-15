import { Action } from '@ngrx/store';

export enum NotificationsActionTypes {
    MarkNotificationAction = '[Notifications] Mark Notification Action',
    MarkNotificationActionSuccess = '[Notifications] Mark Notification Action Successfully',
    MarkNotificationActionFail = '[Notifications] Mark Notification Action Failed',
    DeleteNotification = '[Notifications] Delete Notification',
    DeleteNotificationSuccess = '[Notifications] Delete Notification Success',
    DeleteNotificationFail = '[Notifications] Delete Notification Fail',
}

/**
 * NOTIFICATIONS Actions
 */

export class MarkNotificationAction implements Action {
    readonly type = NotificationsActionTypes.MarkNotificationAction;
    constructor(public payload: any) { }
}

export class MarkNotificationActionSuccess implements Action {
    readonly type = NotificationsActionTypes.MarkNotificationActionSuccess;
    constructor(public payload: any) { }
}

export class MarkNotificationActionFail implements Action {
    readonly type = NotificationsActionTypes.MarkNotificationActionFail;
    constructor(public payload: any) { }
}

export class DeleteNotification implements Action {
    readonly type = NotificationsActionTypes.DeleteNotification;
    constructor(public payload: any) { }
}

export class DeleteNotificationSuccess implements Action {
    readonly type = NotificationsActionTypes.DeleteNotificationSuccess;
    constructor(public payload: any) { }
}

export class DeleteNotificationFail implements Action {
    readonly type = NotificationsActionTypes.DeleteNotificationFail;
    constructor(public payload: any) { }
}

export type NotificationsListActionsUnion =
    | MarkNotificationAction
    | MarkNotificationActionSuccess
    | MarkNotificationActionFail
    | DeleteNotification
    | DeleteNotificationSuccess
    | DeleteNotificationFail
