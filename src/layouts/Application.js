import React, { Component } from 'react';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';
import SignUp from '../users/SignUp';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/Application.css';

class Application extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Container>
            <Switch>
              <Route exact={true} path="/" component={Content} />
              <Route path="/sign_up" component={SignUp} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Application;
