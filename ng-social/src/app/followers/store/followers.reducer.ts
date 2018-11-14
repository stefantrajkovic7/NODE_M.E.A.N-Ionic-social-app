import {
    FollowersActionTypes,
    FollowersListActionsUnion,
  } from './followers.actions';
  
  export interface State {
    loaded: boolean;
    loading: boolean;
    followers: any;
  }
  
  const initialState: State = {
    loaded: false,
    loading: false,
    followers: null
  };
  
  export function reducer(
    state = initialState,
    action: FollowersListActionsUnion
  ): State {
    switch (action.type) {
  
      case FollowersActionTypes.LoadFollowers: {
        return {
            ...state,
            loading: true
        };
      }
  
      case FollowersActionTypes.LoadFollowersSuccess: {
        return {
            ...state,
            followers: action.payload.result,
            loading: false
        };
      }
  
      default: {
        return state;
      }
    }
  }
  