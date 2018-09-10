import {
    select,
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  
  import * as fromPosts from './post.reducer';
  import * as fromRoot from '../../../reducers';
  
  export interface PostsState {
    posts: fromPosts.State;
  }
  
  export interface State extends fromRoot.State {
    posts: PostsState;
  }
  
  export const reducers: ActionReducerMap<PostsState> = {
    posts: fromPosts.reducer,
  };
  
  export const getPostsState = createFeatureSelector<PostsState>('posts');
  
  export const getPostsEntitiesState = createSelector(
    getPostsState,
    state => state.posts
  );
  
  export const {
    selectEntities: getPostsListEntities,
    selectAll: getAllPosts,
    selectTotal: getTotalPosts,
  } = fromPosts.adapter.getSelectors(getPostsEntitiesState);
  
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
  