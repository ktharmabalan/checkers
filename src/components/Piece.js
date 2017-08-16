import React from 'react';
import {Circle} from 'react-konva';

class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  handleClick = (event) => {
    this.props.onClick(this.props.coords, 'piece');
  }

  mouseEnterHandler = (event) => {
    // this.setState(prevState => ({
    //   ...this.state,
    //   hover: !prevState.hover
    // }));

    // console.log(this.props.coords);
    // console.log('hover Piece');

    // this.props.onClick(this.props.coords);

    // let x = event.target.attrs.x;
    // let y = event.target.attrs.y;
    // let xRemainder = x % this.props.unit;
    // let yRemainder = y % this.props.unit;

    // let row = (x - xRemainder) / this.props.unit;
    // let col = (y - yRemainder) / this.props.unit;
    
    // console.log(row, col);
    // console.log(event.target.attrs.x, event.target.attrs.y);
  };

  handleDrag = (event) => {
    let unit = this.state.unit;
    // get new position of dragged element 
    let attrs = event.target.attrs;
    let x = attrs.x;
    let y = attrs.y;

    if (attrs.x < 0) {
      x = -(unit/2);
      y = event.target.attrs.y - unit/2;
    }
    if (attrs.x > (8 * unit)) {
      x = (8 * unit)-(unit/2);
      y = event.target.attrs.y - unit/2;
    }
    if (attrs.y < 0) {
      x = event.target.attrs.x - unit/2;
      y = -(unit/2);
    }
    if (attrs.y > (8 * unit)) {
      x = event.target.attrs.x - unit/2;
      y = (8 * unit)-(unit/2);
    }
    this.setState({
      ...this.state,
      position: [x, y]
    });
  } 
  // draggable={true}
  // onDragMove={this.handleDrag}

  render() {
    let {
      index,
      unit,
      position,
      color,
      coords
    } = this.state;

    return(
      <Circle 
        x={position[0] + unit/2}
        y={position[1] + unit/2}
        radius={unit/2.75}
        fill={color}
        stroke={'black'}
        strokeWidth={0.5}
        key={index}
        index={index}
        id={index}
        coords={coords}
        onClick={this.handleClick}
        onMouseEnter={this.mouseEnterHandler}
      />
    );
  }
}

export default Piece;