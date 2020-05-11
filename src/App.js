import React, { Component } from 'react';
import Item from './Components/Item';

export class App extends Component {
  state = {
    items: [
      {name: 'first', number: 1},
      {name: 'second', number: 2},
      {name: 'third', number: 3},
    ],
    title: 'Title',
  }

  changeTitle = (arg) => {
    this.setState({title: arg})
  }

  inputChange = (event) => {
    this.setState({title: event.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.inputChange} value={this.state.title} />
        <h1>{this.state.title}</h1>
        <button onClick={() => this.changeTitle('main')}>Change title</button>
        <Item name={this.state.items[0].name} number={this.state.items[0].number} changeTitle={this.changeTitle} />
        <Item name={this.state.items[1].name} number={this.state.items[1].number} changeTitle={this.changeTitle} />
        <Item name={this.state.items[2].name} number={this.state.items[2].number} changeTitle={this.changeTitle} />
      </div>
    )
  }
}

export default App;
