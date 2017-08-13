import React from 'react';
import {Layer,Line,Text} from 'react-konva';

export const Grid = ({unit, size, rows}) => {
  let grid = [];
  let stroke = 'grey';
  let strokeWidth = 10;

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
    <Layer>
      {grid}
    </Layer>
  );
};

export const Tiles = ({unit, coordinates, colors}) => {
  let tiles = coordinates.map((position, index) => {
    return (
      <Text
        key={index}
        index={index}
        x={position[0]}
        y={position[1]}
        fontSize={unit}
        width={unit}
        text={colors[index]}
        fill={colors[index]}
        fontFamily={'Helvetica'}
        align={'center'}
        onClick={(event)=>{
          let index = event.target.index;
        }}
      />
    );
  });

  return(
    <Layer>
      {tiles}
    </Layer>
  );
};