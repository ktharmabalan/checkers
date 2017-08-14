import React from 'react';
import { Stage, Layer } from 'react-konva';
import Tile from './Tile';
import Piece from './Piece';

class Checker extends React.Component {
  state = {
    rows: 8,
    rowsvisible: 3
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let size = (height < width) ? height * .8 : width * .8;
    size = Math.floor(size);
    let rows = this.state.rows;
    let unit = size / rows;
    unit = Math.floor(unit);
    size = unit * rows;
    // let coordinates = [];
    // let colors = [];
    // let piecegroups = [];
    let pieces = [];
    let tiles = [];
    let tileMap = {};

    console.log(size, unit);
    
    let tileColorChoices = ['grey', 'white'];
    let pieceColorChoices = ['red', 'blue', 'black'];

    let color = pieceColorChoices[0];

    let i = 0;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        // coordinates.push([x*unit, y*unit]);
        // colors.push(i % 2 === 0 ? tileColorChoices[0] : tileColorChoices[1]);
        i++;
        
        // Tiles
        tiles.push(
          <Tile 
            unit={unit}
            position={[x*unit, y*unit]}
            color={i % 2 === 0 ? tileColorChoices[0] : tileColorChoices[1]}
            key={(y*rows) + x + '_tile'}
            index={(y*rows) + x + '_tile'}
            opacity={1}
            coords={[x,y]}
          />
        );

        // tileMap[] = (y*rows) + x + '_tile';

        // Pieces
        if((y < this.state.rowsvisible) || (y >= (rows - this.state.rowsvisible))) {
          if(y < this.state.rowsvisible) {
            color = pieceColorChoices[0];
          } else if(y >= (rows - this.state.rowsvisible)) {
            color = pieceColorChoices[1];
          }
          
          if ((y+1) % 2 !== 0) {
            if ((x+1) % 2 === 0) {
              // piecegroups.push([x*unit, y*unit]);
              pieces.push(<Piece 
                key={(y*rows) + x}
                index={(y*rows) + x}
                position={[x*unit, y*unit]}
                unit={unit}
                color={color}
                coords={[x,y]}
              />);
            }
          } else {
            if ((x+1) % 2 !== 0) {
              // piecegroups.push([x*unit, y*unit]);
              pieces.push(<Piece 
                key={(y*rows) + x}
                index={(y*rows) + x}
                position={[x*unit, y*unit]}
                unit={unit}
                color={color}
                coords={[x,y]}
              />);
            }
          }
        }
      }
      i++;
    }

    this.setState({
      size,
      // rows,
      // unit,
      // coordinates,
      // colors,
      // piecegroups,
      pieces,
      tiles
    });
  }

  render() {
    let {
      size,
      // unit,
      // rows,
      tiles,
      pieces
    } = this.state;
    
    return (
      <div className="Checker">
        <Stage width={size} height={size} className='test'>
          <Layer>
            {tiles}
            {pieces}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Checker;