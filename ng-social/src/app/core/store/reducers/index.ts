import {
  AuthActionsUnion,
  AuthActionTypes,
} from '../actions';


export interface State {
  loading: boolean;
  authenticated: boolean;
  user: any;
}

const initialState: State = {
  loading: false,
  authenticated: false,
  user: null
};

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

    case AuthActionTypes.LoadUser: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case AuthActionTypes.LoadUserSuccess: {
      return Object.assign({}, state, {
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
        user: action.payload
      });
    }

    case AuthActionTypes.Logout: {
      return Object.assign({}, state, {
        authenticated: false,
        user: null
      });
    }

    default: {
      return state;
    }
  }
}
