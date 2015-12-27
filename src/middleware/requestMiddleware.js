import invariant from 'invariant';
import { REQUEST } from '../constants';
import { logoutUser } from '../actions/session';

export default ({ dispatch, getState }) => next => action => {
  const callAPI = action[REQUEST];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { types, payload, meta } = callAPI;

  invariant(
    Array.isArray(types) && types.length === 3,
    'The types property must be an array with 3 action types.'
  );

  invariant(
    types.every(type => typeof type === 'string'),
    'The provided types must be strings.'
  );

  invariant(
    payload && payload.request && typeof payload.request === 'function',
    'The payload must contain a request function.'
  );

  const { request, data } = payload;
  const [ PENDING, FULFILLED, REJECTED ] = types;

 /**
  * Dispatch the pending action
  */
  dispatch({
    type: PENDING,
    ...data && { payload: data },
    ...meta && { meta },
  });

  const token = getState().session.get('token', null);

  const config = {
    headers: {
      ...token && { authorization: token },
    },
  };

  /**
   * If successful, dispatch the fulfilled action, otherwise dispatch
   * rejected action.
   */
  return request(config).then(
    result => {
      return next({
        type: FULFILLED,
        payload: result,
        meta,
      });
    },
    error => {
      if (error && error.response && error.response.status === 401) {
        dispatch(logoutUser(error.response.message));
      }

      return next({
        type: REJECTED,
        payload: error,
        meta,
      });
    }
  );
};
