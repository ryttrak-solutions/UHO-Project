// imports
import React from 'react';

// components
import PuzzleGrid from '../puzzleGrid/puzzleGrid';
import LeftPanel from '../leftPanel/leftPanel';

export default function puzzleParent(props) {
  return (
    <div className="columns is-mobile">
			<LeftPanel className="column" screen="game" />
			<div className="column rightPanel">
				<PuzzleGrid />
			</div>
		</div>
  )
}