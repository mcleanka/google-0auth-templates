import React from 'react'
import './assets/css/styles.css';
import routes from './utils/router';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './includes/Header';
import Footer from './includes/Footer';

export default function App() {
  return <Router>
    <Header />
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
    <Footer />
  </Router>;
}
