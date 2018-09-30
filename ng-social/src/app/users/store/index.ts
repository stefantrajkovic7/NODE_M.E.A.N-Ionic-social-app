import { createSelector } from '@ngrx/store';

export const selectUsersState = state => state.users;

export const getLoading = createSelector(
    selectUsersState,
    users => users.loading
);

export const getAllUsers = createSelector(
    selectUsersState,
    users => users.users
);
  