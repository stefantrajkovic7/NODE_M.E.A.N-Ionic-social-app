import { createSelector } from '@ngrx/store';

export const selectUsersState = state => state.users;

export const getLoading = createSelector(
    selectUsersState,
    users => users.loading
);
  