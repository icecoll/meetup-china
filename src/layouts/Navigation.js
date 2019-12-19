import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignUp from '../users/SignUp';
import App from '../App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"><Link to="/">Meetup in China</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets"><Link to="/sign_up">Sign Up</Link></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/sign_up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
