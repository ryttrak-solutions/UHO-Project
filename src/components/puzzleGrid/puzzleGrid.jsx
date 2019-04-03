// imports
import React, { Component } from 'react'

// components
import Pixel from '../puzzlePixel/puzzlePixel';
// import PixelWrapper from '../pixelWrapper/pixelWrapper';

export default class puzzleGrid extends Component {

	constructor(props) {
		super(props);
		this.state = {
			gridWidthPx: 800,
			gridHeightPx: 600,
			gridWidth: 4,
			gridHeight: 4,
			image: 'https://magazine.uchicago.edu/views/view1_800x600.jpg',
			shuffledPixels: null
		}
	}
	
	componentWillMount() {
		this.setShuffledPixels();
	}

	setShuffledPixels = () => {
		this.setState({
			shuffledPixels: this.shufflePixels(Array.apply(null, {length: this.state.gridHeight * this.state.gridWidth}).map(Number.call, Number))
		})
	}

	shufflePixels = (a) => {
		for (let i = a.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	onClickPixel = (index, positionXY, position) => {
		const {x,y} = positionXY;
		console.log(index, position);
	}


  render() {

		

		const createGrid = () => {

			let randomOrder = this.state.shuffledPixels;
			let pixels = [];
			for (let i=0; i<(this.state.gridHeight * this.state.gridWidth)-1; i++) {
				pixels.push(
					<Pixel
						key={i}
						index={i}
						position={randomOrder[i]}
						gridWidth={this.state.gridWidth}
						gridHeight={this.state.gridHeight}
						gridWidthPx={this.state.gridWidthPx}
						gridHeightPx={this.state.gridHeightPx}
						image={this.state.image}
						onClickPixel={this.onClickPixel}
					/>
				)
			}
			return pixels;
		}

    return (
      <div>
				<button onClick={(e) => {
					this.setShuffledPixels();
				}}>Shuffle</button>
				<div className="puzzleGrid" style={{
					width: `${this.state.gridWidthPx}px`,
					height: `${this.state.gridHeightPx}px`
				}}>
					{createGrid()}
				</div>
			</div>
    )
  }
}
