// imports
import React, { Component } from 'react';

// components
import Pixel from '../puzzlePixel/puzzlePixel';

// import photo1 from '../../assets/1.png';

export default class puzzleGrid extends Component {

	constructor(props) {
		super(props);
		this.state = {
			gridWidthPx: 550,
			gridHeightPx: 750,
			gridWidth: 3,
			gridHeight: 4,
			image: 'http://localhost:8080/5.png',
			// image: photo1,
			correctPixelCombination: null,
			shuffledPixels: null
		}
	}
	
	componentWillMount() {
		let numbersArr = Array.apply(null, {length: this.state.gridHeight * this.state.gridWidth}).map(Number.call, Number);
		this.setState({
			correctPixelCombination: numbersArr,
			shuffledPixels: numbersArr
		});
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
		console.log(a);
		return a;
	}

	checkWin = () => {

		for(let i=0; i<this.state.correctPixelCombination.length; i++) {
			console.log(this.state.correctPixelCombination[i], this.state.shuffledPixels[i]);
			if ((this.state.correctPixelCombination[i] !== this.state.shuffledPixels[i])) {
				return false
			}
		}
		return true;
	}

	onClickPixel = (index, positionXY, position) => {
		let emptyPosition = this.state.shuffledPixels[this.state.gridHeight*this.state.gridWidth-1];
		let { x: emptyX, y: emptyY} = {
			x: emptyPosition % this.state.gridWidth,
			y: Math.floor(emptyPosition / this.state.gridWidth)
		}
		let {x, y} = {
			x: position % this.state.gridWidth,
			y: Math.floor(position / this.state.gridWidth)
		}
		// const {x, y} = positionXY;
		// console.log(index, position);
		// console.log(emptyPosition);
		console.log(x,y);
		console.log(emptyX, emptyY, "empty pixel");
		console.log((x === emptyX || y === emptyY));
		console.log((Math.abs(x-emptyX) === 1 || Math.abs(y-emptyY) === 1));
		console.log((x === emptyX || y === emptyY) && (Math.abs(x-emptyX) === 1 || Math.abs(y-emptyY) === 1));
		if ((x === emptyX || y === emptyY) && (Math.abs(x-emptyX) === 1 || Math.abs(y-emptyY) === 1)) {
			let shuffledPixels = this.state.shuffledPixels;
			shuffledPixels[this.state.gridHeight*this.state.gridWidth-1] = position;
			shuffledPixels[this.state.shuffledPixels.indexOf(position)] = emptyPosition;
			// console.log(shuffledPixels);
			this.setState({
				shuffledPixels
			}, () => {
				if (this.checkWin()) {
					console.log("you win");
					// alert("you win")
				}
			})
		}
	}


  render() {

		const createGrid = () => {

			let randomOrder = this.state.shuffledPixels;
			let pixels = [];
			for (let i=0; i<(this.state.gridHeight * this.state.gridWidth); i++) {
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
      <div className="columns is-mobile">
				{/* <button onClick={(e) => {
					this.setShuffledPixels();
				}}>Shuffle</button> */}

				<div className="column selectedPuzzle">
					<div className="title">
						Puzzle
					</div>

					<div className="puzzleGrid" style={{
						width: `${this.state.gridWidthPx}px`,
						height: `${this.state.gridHeightPx}px`
					}}>
						{createGrid()}
					</div>
				</div>

				<div className="column otherPuzzles">
					<figure className="image otherPuzzle">
						<img alt="pic1" src={`${this.state.image}`}/>
					</figure>

					<figure className="image otherPuzzle">
						<img alt="pic2" src={`${this.state.image}`}/>
					</figure>
					
					<figure className="image otherPuzzle">
						<img alt="pic3" src={`${this.state.image}`}/>
					</figure>
				</div>


			</div>
    )
  }
}
