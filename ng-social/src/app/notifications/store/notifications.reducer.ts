import {
    FollowingActionTypes,
    FollowingListActionsUnion,
  } from './notifications.actions';
  
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
    action: FollowingListActionsUnion
  ): State {
    switch (action.type) {
      default: {
        return state;
      }
    }
  }
  