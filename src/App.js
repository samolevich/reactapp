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

  changeTitle = () => {
    this.setState({title: 'New Title'})
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle}>Change title</button>
        <Item name={this.state.items[0].name} number={this.state.items[0].number} />
        <Item name={this.state.items[1].name} number={this.state.items[1].number} />
        <Item name={this.state.items[2].name} number={this.state.items[2].number} />
      </div>
    )
  }
}

export default App;