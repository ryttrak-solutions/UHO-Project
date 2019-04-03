// imports
import React, { Component } from 'react';
import './App.css';

// components
import PuzzleGrid from './components/puzzleGrid/puzzleGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello
        <PuzzleGrid />
      </div>
    );
  }
}

export default App;
