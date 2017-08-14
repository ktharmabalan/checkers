import React from 'react';
import {Rect} from 'react-konva';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalColor: props.color,
      hover: false
    };

    // This binding is necessary to make `this` work in the callback
    // this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    // this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  // mouseEnterHandler = (event) => {
  //   this.setState(prevState => ({
  //     ...this.state,
  //     opacity: .5,
  //     hover: !prevState.hover
  //   }));
  // };

  // mouseLeaveHandler = (event) => {
  //   this.setState(prevState => ({
  //     ...this.state,
  //     opacity: 1,
  //     hover: !prevState.hover
  //   }));
  // };

  // onMouseEnter={this.mouseEnterHandler}
  // onMouseLeave={this.mouseLeaveHandler}

  render() {
    let {
      unit,
      position,
      color,
      index,
      coords
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
        fill={this.state.hover ? 'green' : (this.state.originalColor ? this.state.originalColor : color)}
        opacity={this.state.opacity}
      />
    );
  }
}

export default Tile;