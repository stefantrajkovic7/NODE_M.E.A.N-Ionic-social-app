import { createSelector } from '@ngrx/store';

export const selectFollowersState = state => state.followers;

export const getLoading = createSelector(
    selectFollowersState,
    following => following.loading
);

export const getAllFollowers = createSelector(
    selectFollowersState,
    followers => followers.followers
);