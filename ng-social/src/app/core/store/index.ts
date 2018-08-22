import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import '@ngrx/core/add/operator/select';
  
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
  
  
  export const {
    selectEntities: getAuthListEntities,
    selectAll: getAllAuth,
    selectTotal: getTotalAuth,
  } = fromAuth.adapter.getSelectors(getAuthEntitiesState);
  
//   export const getListState = createSelector(
//     getSurveysState,
//     (state: SurveysState) => state.surveys
//   );
  
//   export const getListLoaded = createSelector(
//     getListState,
//     fromSurveys.getLoaded
//   );
  