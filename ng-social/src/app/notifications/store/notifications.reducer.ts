import {
    NotificationsActionTypes,
    NotificationsListActionsUnion,
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
    action: NotificationsListActionsUnion
  ): State {
    switch (action.type) {
      default: {
        return state;
      }
    }
  }
  