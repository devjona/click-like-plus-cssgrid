import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Click the like buttons!
        </header>
        <Container />
      </div>
    );
  }
}

export default App;
