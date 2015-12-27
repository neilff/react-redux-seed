import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import content from './content';
import session from './session';

const rootReducer = combineReducers({
  session,
  content,
  router: routerStateReducer,
  form: formReducer,
});

export default rootReducer;
