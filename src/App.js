import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import * as Sentry from "@sentry/react";

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

  // componentDidCatch(error, info) {
  //   Sentry.captureException(error);
  //   this.setState({ error: true });
  // }

  render() {
    if (this.state.error) {
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            YOU A BIG DUMMY
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <p>Hello</p>
        <button onClick={this.throwError}>Throw error</button>
      </div>
      )
    }

    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <p>Hello</p>
        <button onClick={this.throwError}>Throw error</button>
      </div>
    );
  }
}

export default App;
