import { Action } from '@ngrx/store';
import { User } from '../../models';

export enum AuthActionTypes {
    Register = '[Auth] Register Action',
    RegisterSuccess = '[Auth] Register Success Action',
    RegisterFail = '[Auth] Register Failed Action',
    LoadUser = '[Auth] Load User',
    LoadUserSuccess = '[Auth] Load User Success',
    LoadUserFail = '[Auth] Load User Failed',
    Login = '[Auth] Login Action',
    LoginSuccess = '[Auth] Login Success Action',
    LoginFail = '[Auth] Login Failed Action',
    Logout = '[Auth] Logout Action'
}

/**
 * Auth Actions
 */

export class Register implements Action {
  readonly type = AuthActionTypes.Register;

  constructor(public payload: User) { }
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;

  constructor(public payload: any) { }
}

export class RegisterFail implements Action {
  readonly type = AuthActionTypes.RegisterFail;

  constructor(public message: any) { }
}

export class LoadUser implements Action {
  readonly type = AuthActionTypes.LoadUser;
}

export class LoadUserSuccess implements Action {
  readonly type = AuthActionTypes.LoadUserSuccess;

  constructor(public payload: any) { }
}

export class LoadUserFail implements Action {
  readonly type = AuthActionTypes.LoadUserFail;

  constructor(public payload: any) { }
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: User) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: any) { }
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;

  constructor(public message: any) { }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActionsUnion =
  | Register
  | RegisterSuccess
  | RegisterFail
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail
  | Login
  | LoginSuccess
  | LoginFail
  | Logout

