import React from 'react'
import './App.css';
import './assets/css/styles.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return <Router>
    <>
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
    </>
  </Router>;
}
