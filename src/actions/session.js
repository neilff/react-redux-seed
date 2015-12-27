import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  FORM_RESET,
  REQUEST,
} from '../constants';

import { login } from '../api/login';

export function loginUser() {
  return (dispatch, getState) => {
    const username = getState().form.login.username.value;
    const password = getState().form.login.password.value;

    return dispatch({
      [REQUEST]: {
        types: [ LOGIN_USER_PENDING, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR ],
        payload: {
          request: login(username, password),
        },
      },
    })
    .then(dispatch({
      type: FORM_RESET,
      form: 'login',
    }));
  };
}

export function logoutUser(message) {
  return {
    type: LOGOUT_USER,
    payload: {
      message,
    },
  };
}
