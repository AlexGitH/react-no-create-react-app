import React, { Component } from 'react';
import Counter from './Counter';
import Dev from './Dev';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <Counter/>
        <Dev/>
      </div>
    );
  }
}

export default App;