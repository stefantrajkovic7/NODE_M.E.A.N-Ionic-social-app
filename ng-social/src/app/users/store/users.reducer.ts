import {
    UsersListActionsUnion,
    UsersActionTypes,
  } from './users.actions';
  
  export interface State {
    loaded: boolean;
    loading: boolean;
    users: any;
  }
  
  const initialState: State = {
    loaded: false,
    loading: false,
    users: null
  };
  
  export function reducer(
    state = initialState,
    action: UsersListActionsUnion
  ): State {
    switch (action.type) {
  
      case UsersActionTypes.LoadUsers: {
        return {
            ...state,
            loading: true
        };
      }
  
      case UsersActionTypes.LoadUsersSuccess: {
        return {
            ...state,
            users: action.payload.result,
            loading: false
        };
      }
  
      default: {
        return state;
      }
    }
  }
  