import {
  LOAD_CONTENT_PENDING,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_ERROR,
} from '../constants';

import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  title: '',
  body: '',
  isLoading: false,
});

function contentReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case LOAD_CONTENT_PENDING:
    return state.merge(fromJS({
      title: '',
      body: '',
      isLoading: true,
    }));

  case LOAD_CONTENT_SUCCESS:
    return state.merge(fromJS(action.payload))
                .set('isLoading', false);

  case LOAD_CONTENT_ERROR:
    return INITIAL_STATE;

  default:
    return state;
  }
}

export default contentReducer;
