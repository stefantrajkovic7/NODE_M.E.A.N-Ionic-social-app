import { createSelector } from '@ngrx/store';

export const selectPostsState = state => state.posts;

export const getLoading = createSelector(
  selectPostsState,
  posts => posts.loading
);
  
export const getUser = createSelector(
  selectPostsState,
  posts => posts.user
);
  