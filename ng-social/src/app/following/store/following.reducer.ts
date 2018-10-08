import {
    FollowingActionTypes,
    FollowingListActionsUnion,
  } from './following.actions';
  
  export interface State {
    loaded: boolean;
    loading: boolean;
    following: any;
  }
  
  const initialState: State = {
    loaded: false,
    loading: false,
    following: null
  };
  
  export function reducer(
    state = initialState,
    action: FollowingListActionsUnion
  ): State {
    switch (action.type) {
  
      case FollowingActionTypes.LoadFollowers: {
        return {
            ...state,
            loading: true
        };
      }
  
      case FollowingActionTypes.LoadFollowersSuccess: {
        return {
            ...state,
            following: action.payload.result,
            loading: false
        };
      }
  
      default: {
        return state;
      }
    }
  }
  