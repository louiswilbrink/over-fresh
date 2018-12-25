import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  SearchPlace = '[Search] Place',
  SearchPlaces = '[Search] Places',
  ResetSearch = '[Search] Reset'
}
 
export class SearchPlace implements Action {
  readonly type = ActionTypes.SearchPlace;
  meta = {
    description: 'The user searched for a specific result to display on the map.'
  };
  payload: string

  constructor(payload: string) {
    this.payload = payload;
  }
}
 
export class SearchPlaces implements Action {
  readonly type = ActionTypes.SearchPlaces;
  meta = {
    description: 'The user searched for multiple places based on a string query.'
  };
  payload: string

  constructor(payload: string) {
    this.payload = payload;
  }
}

export class ResetSearch implements Action {
  readonly type = ActionTypes.ResetSearch;
  meta = {
    description: 'The user reset the search workflow.'
  };
  payload: string

  constructor(payload: string) {
    this.payload = payload;
  }
}
