import { createSelector } from '@ngrx/store';

export const selectCommentsState = state => state.comments;

export const getLoading = createSelector(
    selectCommentsState,
    comments => comments.loading
);

export const getComments = createSelector(
    selectCommentsState,
    comments => comments.comments
);

export const getPost = createSelector(
    selectCommentsState,
    comments => comments.post
)
  