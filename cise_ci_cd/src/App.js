import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  makeIncrementer = (amount) => () =>
    this.setState((prevState) => ({
      count: prevState.count + amount,
    }));

  increment = this.makeIncrementer(1);
  render() {
    return (
      <div>
        ENSE701Assessment 1AS1 2021Pg 3of 6copyright Jim Buchan
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>
          Increment count
        </button>
      </div>
    );
  }
}

export default App;
