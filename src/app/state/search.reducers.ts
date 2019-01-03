import { Action } from '@ngrx/store';
import { InitSearch, ActionTypes } from './search.actions';
 
export const initialState = new InitSearch();

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
