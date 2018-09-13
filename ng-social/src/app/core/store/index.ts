import { createSelector } from '@ngrx/store';

  export const selectAuthState = state => state.auth;
  
  export const isAuthenticated = createSelector(
    selectAuthState,
    auth => auth.authenticated
  );

  export const getUser = createSelector(
    selectAuthState,
    auth => auth.user
  );
  
  export const getLoading = createSelector(
    selectAuthState,
    auth => auth.loading
  );
  