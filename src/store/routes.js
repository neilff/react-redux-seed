import React from 'react';
import { IndexRoute, Router } from 'react-router';

import App from '../containers/App';
import About from '../containers/About';

export default (
  <Router path="/" component={ App }>
    <IndexRoute component={ About } />
  </Router>
);
