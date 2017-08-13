import React from 'react';
import {Circle, Group} from 'react-konva';

class Piece extends React.Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    let {
      index,
      unit,
      position,
      color
    } = this.props;

    let colors = ['red', 'blue', 'black'];

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
        onClick={(event)=>{
          let index = event.target.index;
          console.log(index);
        }}
      />
    );
  }
}

export default Piece;