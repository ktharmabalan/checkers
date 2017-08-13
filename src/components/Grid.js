import React from 'react';
import {Line, Group} from 'react-konva';

class Grid extends React.Component {
  state = {
    color: 'grey'
  };

  constructor(...args) {
    super(...args);
  }

  render() {
    let grid = [];
    let stroke = 'grey';
    let strokeWidth = 5;
    let {
      rows,
      unit,
      size,
    } = this.props;
    
    for (let i = 1; i < rows; i++) {
      let position = unit * i;
      grid.push(
        <Line
          points={[position, 0, position, size]}
          stroke={stroke}
          strokeWidth={strokeWidth}
          key={i+'v'}
        />
      );

      grid.push(
        <Line
          points={[0, position, size, position]}
          stroke={stroke}
          strokeWidth={strokeWidth}
          key={i+'h'}
        />
      );
    }

    return (
      <Group>
        {grid}
      </Group>
    );
  }
}

export default Grid;