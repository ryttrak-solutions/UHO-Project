// imports
import React, { Component } from 'react'

// components
import Pixel from '../puzzlePixel/puzzlePixel';

export default class puzzleGrid extends Component {

	constructor(props) {
		super(props);
		this.state = {
			gridWidth: 4,
			gridHeight: 3
		}
	}

  render() {
		
		const createGrid = () => {
			for (let i=0; i<(this.state.gridHeight * this.state.gridWidth); i++) {
				return(
					<Pixel i={i} />
				)
			}
		}

    return (
      <div>
        {createGrid()}
      </div>
    )
  }
}
