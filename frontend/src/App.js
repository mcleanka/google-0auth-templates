import React from 'react'
import './assets/css/styles.css';
import routes from './utils/router';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainWrapper from './includes/MainWrapper';

export default function App() {
  return <Router>
    <MainWrapper>
      <Switch>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))
        }
      </Switch>
    </MainWrapper>
  </Router>;
}
