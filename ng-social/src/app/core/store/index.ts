import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
    select
  } from '@ngrx/store';
  
  import * as fromAuth from './reducers';
  import * as fromRoot from '../../reducers';
  
  export interface AuthState {
    auth: fromAuth.State;
  }
  
  export interface State extends fromRoot.State {
    auth: AuthState;
  }
  
  export const reducers: ActionReducerMap<AuthState> = {
    auth: fromAuth.reducer,
  };
  
  export const getAuthState = createFeatureSelector<AuthState>('auth');
  
  export const getAuthEntitiesState = createSelector(
    getAuthState,
    state => state.auth
  );
  
  export const getListAuthState = createSelector(
    getAuthState,
    (state: AuthState) => state.auth
  );
  
  export const {
    selectEntities: getAuthListEntities,
    selectAll: getAllAuth,
    selectTotal: getTotalAuth,
  } = fromAuth.adapter.getSelectors(getAuthEntitiesState);
  
  export const isAuthenticated = createSelector(
    getListAuthState,
    fromAuth.isAuthenticated
  );
  
  export const getLoading = createSelector(
    getListAuthState,
    fromAuth.getLoading
  );
  