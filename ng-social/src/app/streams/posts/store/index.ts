import { createSelector } from '@ngrx/store';

export const selectPostsState = state => state.posts;

export const getLoading = createSelector(
  selectPostsState,
  posts => posts.loading
);

export const getPosts = createSelector(
  selectPostsState,
  posts => posts.posts
);
  