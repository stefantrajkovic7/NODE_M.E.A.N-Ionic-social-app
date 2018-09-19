import {
  PostsListActionsUnion,
  PostsActionTypes,
} from './post.actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  posts: any;
}

const initialState: State = {
  loaded: false,
  loading: false,
  posts: null
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
        posts: action.payload,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}
