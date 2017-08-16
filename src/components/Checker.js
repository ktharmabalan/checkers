import React from 'react';
import { Stage, Layer } from 'react-konva';
import TilesList from './TilesList';
import PiecesList from './PieceList';

class Checker extends React.Component {
  state = {
    rows: 8,
    rowsVisible: 3,
    hoveredTile: 5 + '_' + 3,
    selectedPiece: null
  }

  constructor(props) {
    super(props);
  }

  // hoverTile = () => {
  //   this.setState({
  //     ...this.state,
  //     hoveredTile: [5,5]
  //   });
  // }

  updateTile = (data, type) => {
    let tempTilemap = this.state.tilesMap;
    let tempPieceMap = this.state.piecesMap;
    let hoveredTile = null;
    let temp = null;
    let selectedPiece = null;
    let key = data[0] + '_' + data[1];

    if (this.state.hoveredTile) {
      temp = this.state.tilesMap[this.state.hoveredTile];
      temp['hover'] = false;
      tempTilemap[this.state.hoveredTile] = temp;
    }
    
    if (this.state.hoveredTile !== (key)) {
      hoveredTile = key;
      temp = this.state.tilesMap[key];
      temp['hover'] = true;
      tempTilemap[key] = temp;
    }

    if (type === 'piece') {
      selectedPiece = key;
    } else {
      if (this.state.selectedPiece !== null && this.state.selectedPiece !== key) {
        temp = tempPieceMap[this.state.selectedPiece];
        let coords = key.split('_');
        coords[0] = parseInt(coords[0], 10);
        coords[1] = parseInt(coords[1], 10);
        let selectedCoords = [temp.x, temp.y];

        if (((selectedCoords[0] + 1) === coords[0] && (selectedCoords[1] + 1) === coords[1]) || ((selectedCoords[0] - 1) === coords[0] && (selectedCoords[1] - 1) === coords[1]) ||
          ((selectedCoords[0] + 1) === coords[0] && (selectedCoords[1] - 1) === coords[1]) || ((selectedCoords[0] - 1) === coords[0] && (selectedCoords[1] + 1) === coords[1])) {
          temp['x'] = coords[0];
          temp['y'] = coords[1];
  
          delete tempPieceMap[this.state.selectedPiece];
          tempPieceMap[key] = temp;
        }
      }
    }
    
    this.setState({
      ...this.state,
      tilesMap: tempTilemap,
      piecesMap: tempPieceMap,
      hoveredTile: hoveredTile,
      selectedPiece
    });
  };

  componentWillMount() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let size = (height < width) ? height * .8 : width * .8;
    size = Math.floor(size);
    let rows = this.state.rows;
    let unit = size / rows;
    unit = Math.floor(unit);
    size = unit * rows;
    
    let tileColorChoices = ['grey', 'white'];
    let pieceColorChoices = ['red', 'blue', 'black'];

    let tileColor = tileColorChoices[0];
    let color = pieceColorChoices[0];
    
    let i = 0;
    let piece = false;

    let piecesMap = {};
    let tilesMap = {};

    // cols
    for (let y = 0; y < rows; y++) {
      // rows
      for (let x = 0; x < rows; x++) {
        piece = false;
        i++;

        // Pieces
        if((y < this.state.rowsVisible) || (y >= (rows - this.state.rowsVisible))) {
          if(y < this.state.rowsVisible) {
            color = pieceColorChoices[0];
          } else if(y >= (rows - this.state.rowsVisible)) {
            color = pieceColorChoices[1];
          }
          
          if ((y+1) % 2 !== 0) {
            if ((x+1) % 2 === 0) {
              piece = true;
            }
          } else {
            if ((x+1) % 2 !== 0) {
              piece = true;
            }
          }
        }

        if (piece) {
          piecesMap[x+'_'+y] = {
            x,
            y,
            color
          };
        }

        tileColor = i % 2 === 0 ? tileColorChoices[0] : tileColorChoices[1];

        // Tiles
        tilesMap[x+'_'+y] = {
          x,
          y,
          color: tileColor,
          hover: false
        };

        if(x+'_'+y ===this.state.hoveredTile) {
          tilesMap[x+'_'+y]['hover'] = true;
        }
      }
      i++;
    }

    this.setState({
      ...this.state,
      size,
      rows,
      unit,
      tileColorChoices,
      pieceColorChoices,
      tilesMap,
      piecesMap
    });
  }
  
  render() {
    return (
      <div className="Checker">
        <Stage width={this.state.size} height={this.state.size} className='test'>
          <Layer>
            <TilesList tiles={this.state.tilesMap} size={this.state.size} rows={this.state.rows} unit={this.state.unit} updateTile={this.updateTile} />
            <PiecesList pieces={this.state.piecesMap} size={this.state.size} rows={this.state.rows} unit={this.state.unit} updateTile={this.updateTile} />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Checker;