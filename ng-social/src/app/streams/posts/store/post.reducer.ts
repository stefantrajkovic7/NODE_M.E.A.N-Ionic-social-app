import {
  PostsListActionsUnion,
  PostsActionTypes,
} from './post.actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  user: any;
}

const initialState: State = {
  loaded: false,
  loading: false,
  user: null
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
