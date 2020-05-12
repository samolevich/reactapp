import React, { Component } from 'react';
import Item from './Components/Item';
import Counter from './Components/Counter';

export class App extends Component {
  state = {
    items: [
      { name: 'first', number: 1 },
      { name: 'second', number: 2 },
      { name: 'third', number: 3 },
    ],
    title: 'Title',
    showItems: false,
  };

  changeTitle = arg => {
    this.setState({ title: arg });
  };

  inputChange = event => {
    this.setState({ title: event.target.value });
  };

  toggleShow = () => {
    this.setState({
      showItems: !this.state.showItems,
    });
  };

  render() {
    let items = null;
    if (this.state.showItems) {
      items = this.state.items.map(item => (
        <Item key={item.name + item.number} name={item.name} number={item.number} changeTitle={this.changeTitle} />
      ));
    }

    return (
      <div>
        <Counter />
        <input type='text' onChange={this.inputChange} value={this.state.title} />
        <h1>{this.state.title}</h1>
        <button onClick={() => this.changeTitle('main')}>Change title</button>
        <p>
          <button onClick={this.toggleShow}>Toggle</button>
        </p>
        {items}
      </div>
    );
  }
}

export default App;
