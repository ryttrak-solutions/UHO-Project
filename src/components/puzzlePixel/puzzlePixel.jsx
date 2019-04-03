import React, { Component } from 'react'

export default class puzzlePixel extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pixelWidth: this.props.gridWidthPx / this.props.gridWidth,
      pixelHeight: this.props.gridHeightPx / this.props.gridHeight,
      positionX: (this.props.index) % this.props.gridWidth,
      positionY: Math.floor((this.props.index) / this.props.gridWidth)
    }
  }

  render() {
    return (
      <div className="gridPixel" style={{
        width: `${this.state.pixelWidth}px`,
        height: `${this.state.pixelHeight}px`,
        left: `${((this.props.position) % this.props.gridWidth) * this.state.pixelWidth}px`,
        top: `${(Math.floor((this.props.position) / this.props.gridWidth)) * this.state.pixelHeight}px`,
        backgroundImage: `url(${this.props.image})`,
        backgroundSize: `${this.props.gridWidthPx}px ${this.props.gridHeightPx}px`,
        backgroundPosition: `-${this.state.positionX * this.state.pixelWidth}px -${this.state.positionY * this.state.pixelHeight}px`
      }} onClick={(e) => {
        this.props.onClickPixel(this.props.index, {
          x: this.state.positionX,
          y: this.state.positionY
        }, this.props.position)
      }}>
        Pixel {this.props.index}
      </div>
    )
  }
}
