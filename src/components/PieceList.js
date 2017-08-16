import React from 'react';
import Piece from './Piece';
import {Group} from 'react-konva';

const PieceList = ({ pieces, size, rows, unit, updateTile }) => (
  <Group>
    {Object.keys(pieces).map(idx => {
      let piece = pieces[idx];

      return(<Piece 
        key={(piece.y*rows) + '_' + piece.x}
        index={(piece.y*rows) + '_' + piece.x}
        position={[piece.x*unit, piece.y*unit]}
        unit={unit}
        color={piece.color}
        coords={[piece.x,piece.y]}
        onClick={updateTile}
      />);
    })}
  </Group>
);

export default PieceList;