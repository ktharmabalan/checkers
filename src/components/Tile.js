import React from 'react';
import {Group, Rect} from 'react-konva';

class Tile extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    let {
      unit,
      coordinates,
      colors
    } = this.props;

    let squares = coordinates.map((position, index) => {
      return (
        <Rect
          key={index}
          index={index}
          x={position[0]}
          y={position[1]}
          width={unit}
          height={unit}
          fill={colors[index]}
        />
      );
    });

    return (
      <Group>
        {squares}
      </Group>
    );
  }
}

export default Tile;