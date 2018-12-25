import { Action } from '@ngrx/store';
import { ActionTypes } from './search.actions';
 
export const initialState = { type: '[Search] Init' };

export function searchReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.SearchPlace:
      return Object.assign(state, action);
    case ActionTypes.SearchPlaces:
      return Object.assign(state, action);
    case ActionTypes.ResetSearch:
      return initialState;
    default:
      return state;
  }
}
