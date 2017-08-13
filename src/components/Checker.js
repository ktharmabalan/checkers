import React from 'react';
import { Stage, Layer } from 'react-konva';
import Grid from './Grid';
import Tile from './Tile';

class Checker extends React.Component {
  state = {
    rows: 8,
    color: 'grey'
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
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x*unit, y*unit]);
        colors.push(i % 2 === 0 ? 'white' : 'black');
        i++;
      }
      i++;
    }

    this.setState({
      size,
      rows,
      unit,
      coordinates,
      colors
    });
  }

  // <Grid size={size} unit={unit} rows={rows} />

  render() {
    let {
      size,
      unit,
      rows
    } = this.state;
    
    return (
      <div className="Checker">
        <Stage width={size} height={size} className='test'>
          <Layer>
            <Tile unit={unit} coordinates={this.state.coordinates} colors={this.state.colors} />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Checker;