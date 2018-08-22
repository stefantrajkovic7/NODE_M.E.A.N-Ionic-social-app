import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { AuthActionsUnion } from '../actions';
import { User } from '../../models';

export interface State extends EntityState<User> {
  loading: boolean;
  user: any[];
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  loading: false,
  user: null
});

export function reducer(
  state = initialState,
  action: AuthActionsUnion
): State {
  switch (action.type) {

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

// export const getLoaded = (state: State) => state.loaded;

// export const getLoading = (state: State) => state.loading;
