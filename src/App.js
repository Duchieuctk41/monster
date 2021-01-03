import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hi i'm Hieu thu 2",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => {this.setState({string: "Hi i'm Kha Banh"})}}>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
