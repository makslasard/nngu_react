import { SET_USERS_DATA } from './actions';
import { IUsersState } from './interfaces';

const initialState: IUsersState = {
  usersData: [],
  loading: false,
  error: null,
};

export const UsersReducer = (state: IUsersState = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return { ...state, usersData: action.payload };
    default:
      return state;
  }
};
