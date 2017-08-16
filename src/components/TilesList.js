import React from 'react';
import Tile from './Tile';
import {Group} from 'react-konva';

const TilesList = ({ tiles, size, rows, unit, updateTile }) => (
  <Group>
    {Object.keys(tiles).map(idx => {
      let tile = tiles[idx];
      
      return(<Tile 
        unit={unit}
        position={[tile.x*unit, tile.y*unit]}
        color={tile.color}
        key={(tile.y*rows) + tile.x + '_tile'}
        index={(tile.y*rows) + tile.x + '_tile'}
        coords={[tile.x,tile.y]}
        hover={tile.hover}
        onClick={updateTile}
      />);
    })}
  </Group>
);

export default TilesList;