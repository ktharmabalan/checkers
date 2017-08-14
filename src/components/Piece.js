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
    console.log('clicked');
  }

  handleDrag = (event) => {
    let unit = this.state.unit;
    // get new position of dragged element 
    let attrs = event.target.attrs;
    if (attrs.x < 0) {
      this.setState({
        ...this.state,
        position: [-(unit/2), event.target.attrs.y - unit/2]
      });
    }
    if (attrs.x > (8 * unit)) {
      this.setState({
        ...this.state,
        position: [(8 * unit)-(unit/2), event.target.attrs.y - unit/2]
      });
    }
    if (attrs.y < 0) {
      this.setState({
        ...this.state,
        position: [event.target.attrs.x - unit/2, -(unit/2)]
      });
    }
    if (attrs.y > (8 * unit)) {
      this.setState({
        ...this.state,
        position: [event.target.attrs.x - unit/2, (8 * unit)-(unit/2)]
      });
    }
  } 

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
        draggable={true}
        onDragMove={this.handleDrag}
        onClick={this.handleClick}
      />
    );
  }
}

export default Piece;