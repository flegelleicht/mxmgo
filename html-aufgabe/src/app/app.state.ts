import { Action } from '@ngrx/store';
import { User } from './types/user-info';

export const LOGIN = 'LOGIN';

export class AppState {
  currentUser: User;
}
const initialState = {
  currentUser: null
}

export function appReducer(state: AppState = initialState, action: Action) {
  switch (action.type) {
    case LOGIN:
      return { currentUser: new User('a','b','c','d','e') };
    default:
    return state;
  }
}
