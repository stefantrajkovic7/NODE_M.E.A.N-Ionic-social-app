import {
  PostsListActionsUnion,
  PostsActionTypes,
} from './post.actions';

export interface State {
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  loaded: false,
  loading: false
};

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
      return {
        ...state,
        loading: false
      };
    }

    case PostsActionTypes.LoadUser: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case PostsActionTypes.LoadUserSuccess: {
      return Object.assign({}, state, {
        loading: false,
        user: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;
