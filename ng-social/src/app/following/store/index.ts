import { createSelector } from '@ngrx/store';

export const selectFollowingState = state => state.following;

export const getLoading = createSelector(
    selectFollowingState,
    following => following.loading
);

export const getAllFollowers = createSelector(
    selectFollowingState,
    following => following.following
);