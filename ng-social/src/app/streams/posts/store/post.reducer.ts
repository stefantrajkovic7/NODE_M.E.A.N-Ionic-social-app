import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import {
  PostsListActionsUnion,
  PostsActionTypes,
} from './post.actions';

export interface State extends EntityState<any> {
  loaded: boolean;
  loading: boolean;
}

/**
 * createEntityAdapter creates an object of many helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: (posts: any) => posts.id,
  sortComparer: false,
});

// const findCount = data => data === 'title';

/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(
  state = initialState,
  action: PostsListActionsUnion
): State {
  switch (action.type) {

    case PostsActionTypes.LoadPosts: {
        return {
          ...state,
          loading: true
        };
    }

    case PostsActionTypes.LoadPostsSuccess: {
       return adapter.addAll(action.payload, {
        ...state,
    // count: action.count,
        loading: false
       });
    }

    // case SurveyActionTypes.LoadSurveysSearchSuccess: {
    //   return adapter.addAll(action.payload, {
    //     ...state,
    //     count: action.count,
    //     loading: false
    //   });
    // }

    

    // case SurveyActionTypes.LoadItemTypesSuccess: {
    //   return {
    //     ...state,
    //     loading: false,
    //     itemTypes: action.payload.data
    //   };
    // }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;
