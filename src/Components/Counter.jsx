import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    counter: 0,
  };

  addCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  subCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  render() {
    return (
      <p>
        <h2>{this.state.counter}</h2>
        <button onClick={this.addCounter}>+</button>
        <button onClick={this.subCounter}>-</button>
      </p>
    );
  }
}

export default Counter;
