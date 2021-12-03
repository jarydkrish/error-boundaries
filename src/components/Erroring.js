import { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Erroring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBrokenThing: false,
    };
  }

  someBadMisspelledFunction() {
    this.doStuff();
  }

  showBrokenThing() {
    this.setState({ showBrokenThing: true });
  }

  render() {
    if (this.state.showBrokenThing) {
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
          <button onClick={this.someThingBad()}>BROKEN!</button>
        </div>
      );
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
        <button onClick={this.showBrokenThing}>Throw error</button>
      </div>
    );
  }
}

export default Erroring;
