import { Action } from '@ngrx/store';
import { User } from '../../models';

export enum AuthActionTypes {
    Register = '[Auth] Register Action',
    RegisterSuccess = '[Auth] RegisterSuccess Action',
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

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActionsUnion =
  | Register
  | RegisterSuccess
  | Logout

