import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  AuthActionsUnion,
  AuthActionTypes,
} from '../actions';

import { User } from '../../models';

export interface State extends EntityState<User> {
  loading: boolean;
  authenticated: boolean;
  user: any[];
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  loading: false,
  authenticated: false,
  user: null
});

export function reducer(
  state = initialState,
  action: AuthActionsUnion
): State {
  switch (action.type) {

    case AuthActionTypes.Register: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case AuthActionTypes.RegisterSuccess: {
      return Object.assign({}, state, {
        authenticated: true,
        loading: false,
        user: action.payload
      });
    }

    case AuthActionTypes.Login: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case AuthActionTypes.LoginSuccess: {
      return Object.assign({}, state, {
        authenticated: true,
        loading: false,
        user: action.payload.user
      });
    }

    case AuthActionTypes.Logout: {
      return Object.assign({}, state, {
        authenticated: false,
        user: null
      });
    }
      
       

    // case SurveyActionTypes.LoadSurveysSuccess: {
    //   return adapter.addAll(action.payload, {
    //     ...state,
    //     count: action.count,
    //     loading: false
    //   });
    // }


    // case SurveyActionTypes.LoadSurveysSearchSuccess: {
    //   return adapter.addAll(action.payload, {
    //     ...state,
    //     count: action.count,
    //     loading: false
    //   });
    // }
    
    // case SurveyActionTypes.CreateSurveyItem: {
    //   return adapter.updateOne(action.payload, state);
    // }

    // case SurveyActionTypes.ClearSurveyItem: {
    //   return {
    //     ...state,
    //     itemTypes: [],
    //     controls: [],
    //     controlTypes: [],
    //     selectedSurveyItem: null,
    //     itemTypeId: 0
    //   }
    // }

    // case SurveyActionTypes.UpdateSurveyItem: {
    //   return adapter.updateOne(action.payload, state);
    // }

    default: {
      return state;
    }
  }
}

export const isAuthenticated = (state: State) => state.authenticated;

export const getLoading = (state: State) => state.loading;
