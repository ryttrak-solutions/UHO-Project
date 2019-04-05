// imports
import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

// components
import PuzzleParent from './components/puzzleParent/puzzleParent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PuzzleParent />
      </div>
    );
  }
}

export default App;
