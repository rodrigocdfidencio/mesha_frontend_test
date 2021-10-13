import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Playlists from './pages/Playlists';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/playlists" component={ Playlists } />
      </Switch>
    </Router>
  );
}

export default Routes;
