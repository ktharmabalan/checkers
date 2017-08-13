import React from 'react';
import { Stage, Layer } from 'react-konva';
// import Grid from './Grid';
import Tile from './Tile';
import PieceGroup from './PieceGroup';
import Piece from './Piece';

class Checker extends React.Component {
  state = {
    rows: 8,
    rowsvisible: 3
  }

  componentWillMount() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let size = (height < width) ? height * .8 : width * .8;
    let rows = this.state.rows;
    let unit = size / rows;
    let coordinates = [];
    let colors = [];
    let i = 0;
    let piecegroups = [];
    let pieces = [];
    
    let tileColorChoices = ['white', 'grey'];
    let pieceColorChoices = ['red', 'blue', 'black'];

    let color = pieceColorChoices[0];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x*unit, y*unit]);
        colors.push(i % 2 === 0 ? tileColorChoices[0] : tileColorChoices[1]);
        i++;

        if((y < this.state.rowsvisible) || (y >= (rows - this.state.rowsvisible))) {
          if(y < this.state.rowsvisible) {
            color = pieceColorChoices[0];
          } else if(y >= (rows - this.state.rowsvisible)) {
            color = pieceColorChoices[1];
          }
          
          if ((y+1) % 2 !== 0) {
            if ((x+1) % 2 === 0) {
              piecegroups.push([x*unit, y*unit]);
              pieces.push(<Piece 
                key={(y*rows) + x}
                index={(y*rows) + x}
                position={[x*unit, y*unit]}
                unit={unit}
                color={color}
              />);
            }
          } else {
            if ((x+1) % 2 !== 0) {
              piecegroups.push([x*unit, y*unit]);
              pieces.push(<Piece 
                key={(y*rows) + x}
                index={(y*rows) + x}
                position={[x*unit, y*unit]}
                unit={unit}
                color={color}
              />);
            }
          }
        }
      }
      i++;
    }

    this.setState({
      size,
      rows,
      unit,
      coordinates,
      colors,
      piecegroups,
      pieces
    });
  }

  // <Grid size={size} unit={unit} rows={rows} />
  // <PieceGroup unit={unit} coordinates={this.state.coordinates} rows={rows} piecegroups={this.state.piecegroups} />

  render() {
    let {
      size,
      unit,
      rows,
      pieces
    } = this.state;
    
    return (
      <div className="Checker">
        <Stage width={size} height={size} className='test'>
          <Layer>
            <Tile unit={unit} coordinates={this.state.coordinates} colors={this.state.colors} />
            {pieces}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Checker;