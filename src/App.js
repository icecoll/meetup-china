import React, { Component } from 'react';
import Navigation from './layouts/Navigation';
import Content from './layouts/Content';
import Footer from './layouts/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Content />
        <Footer />
      </div>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    );
  }
}

export default App;
