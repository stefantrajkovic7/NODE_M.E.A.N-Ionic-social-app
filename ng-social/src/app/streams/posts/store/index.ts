import { createSelector } from '@ngrx/store';

export const selectPostsState = state => state.posts;

// export const getLoading = createSelector(
//   selectAuthState,
//   auth => auth.loading
// );
  
  /**
   * Some selector functions create joins across parts of state. This selector
   * composes the search result IDs to return an array of books in the store.
   */
  
//   export const getPageCount = createSelector(
//     getSurveysState,
//     (state: SurveysState) => state.surveys.count
//   );
  
//   export const getResultTypes = createSelector(
//     getListState,
//     fromSurveys.getResultTypes
//   )
  