import { IUsers } from '../../../interfaces/IUsers';

export const SET_USERS_DATA = 'SET_USERS_DATA';

export const setUsersDataAction = (payload: IUsers) => {
  return { type: SET_USERS_DATA, payload };
};
