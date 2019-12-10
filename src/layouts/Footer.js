import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <Jumbotron className='App-footer fixed-bottom'>
        @footer
      </Jumbotron>
    );
  }
}

export default Footer;
