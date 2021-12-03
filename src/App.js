import { Component } from 'react';
import * as Sentry from "@sentry/react";

import logo from './logo.svg';
import './App.css';

import Erroring from './components/Erroring';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  throwError() {
    throw new Error('This is an error');
  }

  componentDidCatch(error, info) {
    Sentry.captureException(error);
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="App">
          <h1>AH CRAP, THE APP BROKE!</h1>
        </div>
      );
    }

    return (
      <Erroring />
    );
  }
}

export default App;
