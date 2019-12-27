import React, { Component } from 'react';
import Application from './layouts/Application';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Application />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
