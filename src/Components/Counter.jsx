import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    counter: 0,
  };

  addCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  subCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        <h2>{this.state.counter}</h2>
        <button onClick={this.addCounter}>+</button>
        <button onClick={this.subCounter}>-</button>
      </>
    );
  }
}

export default Counter;
