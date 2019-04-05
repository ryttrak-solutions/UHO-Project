// imports
import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

// components
import PuzzleParent from './components/puzzleParent/puzzleParent';
import WinScreen from './components/winScreen/winScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <WinScreen 
          win="quiz"
          message="congratulation"
          score="7"
        /> */}
        <PuzzleParent />
      </div>
    );
  }
}

export default App;
