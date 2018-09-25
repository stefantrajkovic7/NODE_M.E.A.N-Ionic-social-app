import {
    CommentsListActionsUnion,
    CommentsActionTypes,
  } from './comments.actions';
  
  export interface State {
    loaded: boolean;
    loading: boolean;
    comments: any;
  }
  
  const initialState: State = {
    loaded: false,
    loading: false,
    comments: null
  };
  
  export function reducer(
    state = initialState,
    action: CommentsListActionsUnion
  ): State {
    switch (action.type) {
  
      case CommentsActionTypes.LoadComments: {
          return {
            ...state,
            loading: true
          };
      }
  
      case CommentsActionTypes.LoadCommentsSuccess: {
        return {
          ...state,
          comments: action.payload,
          loading: false
        };
      }
  
      default: {
        return state;
      }
    }
  }
  