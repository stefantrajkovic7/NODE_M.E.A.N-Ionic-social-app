import { createSelector } from '@ngrx/store';

export const selectNotificationsState = state => state.notifications;

export const getLoading = createSelector(
    selectNotificationsState,
    notifications => notifications.loading
);