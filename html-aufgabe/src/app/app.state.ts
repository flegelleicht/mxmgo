import { Action } from '@ngrx/store';

import { User } from './types/user-info';

const initialState = {
  currentUser: null
};

export function appReducer(state: any = initialState, action: Action) {
  switch (action.type) {
    case 'LOGIN':
    return {...state, currentUser: new User("Karl Toffel", "k@t", "123", "", "Hallo Welt!")};
    default:
    return state;
  }
}
