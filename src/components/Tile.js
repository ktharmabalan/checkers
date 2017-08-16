import React from 'react';
import {Rect} from 'react-konva';

class Tile extends React.Component {
  constructor(props) {
    super(props);

    // props.position[0] % props.unit;
    // This binding is necessary to make `this` work in the callback
    this.clickHandler = this.clickHandler.bind(this);
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  clickHandler = (event) => {
    this.props.onClick(this.props.coords, 'tile');
  }

  mouseEnterHandler = (event) => {
    // this.setState(prevState => ({
    //   ...this.state,
    //   opacity: .5,
    //   hover: !prevState.hover
    // }));
    
    let x = event.target.attrs.x;
    let y = event.target.attrs.y;
    let xRemainder = x % this.props.unit;
    let yRemainder = y % this.props.unit;

    let row = (x - xRemainder) / this.props.unit;
    let col = (y - yRemainder) / this.props.unit;
    
    // console.log(row, col);
    // console.log(event.target.attrs.x, event.target.attrs.y);
  };

  mouseLeaveHandler = (event) => {
    // this.setState(prevState => ({
    //   ...this.state,
    //   opacity: 1,
    //   hover: !prevState.hover
    // }));
  };
  
  render() {
    let {
      unit,
      position,
      color,
      index,
      coords,
      hover
    } = this.props;

    return (
      <Rect
        key={index}
        index={index}
        x={position[0]}
        y={position[1]}
        coords={coords}
        width={unit}
        height={unit}
        onClick={this.clickHandler}
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
        fill={hover ? 'green' : color}
        opacity={hover ? 0.5 : 1}
      />
    );
  }
}

export default Tile;