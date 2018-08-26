import { Action } from "@ngrx/store";

export class User {
    id: any;
    username: string;
    password: string;
    email: string;
}

export interface FrenzyAction extends Action {
    payload?: any;
}