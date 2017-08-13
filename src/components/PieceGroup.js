import React from 'react';
import {Circle, Group} from 'react-konva';
import Piece from './Piece';

class PieceGroup extends React.Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    let {
      unit,
      coordinates,
      rows,
      piecegroups
    } = this.props;

    let colors = ['red', 'blue', 'black'];
    let pieces = piecegroups.map((position, index) => {
      return (
        <Piece 
          key={index}
          index={index}
          position={position}
          unit={unit}
        />
      );
    });

    // let show = true;
    // let idx = 0;

    // let pieces = coordinates.map((position, index) => {
    //   idx = index + 1;
    //   show = true;

    //   if((Math.ceil(idx/rows)) % 2 === 0) {
    //     if(idx % 2 !== 0) {
    //       show = false;
    //     }
    //   } else {
    //     if(idx % 2 === 0) {
    //       show = false;
    //     }
    //   }

    //   if(show) {
    //     if(idx <= (rows * 3)) {
    //       return (
    //         <Group
    //           key={index}
    //           index={index}
    //           onClick={(event)=>{
    //             let index = event.target.index;
    //             console.log(index);
    //           }}
    //         >
    //           <Circle 
    //             x={position[0] + unit/2}
    //             y={position[1] + unit/2}
    //             radius={unit/2.50}
    //             fill={colors[2]}
    //           />
    //           <Circle 
    //             x={position[0] + unit/2}
    //             y={position[1] + unit/2}
    //             radius={unit/2.75}
    //             fill={colors[0]}
    //           />
    //         </Group>
    //       );
    //     }
      
    //     if(idx > (rows * 5)) {
    //       return (
    //         <Group
    //           key={index}
    //           index={index}
    //           onClick={(event)=>{
    //             let index = event.target.index;
    //             console.log(index);
    //           }}
    //         >
    //           <Circle 
    //             x={position[0] + unit/2}
    //             y={position[1] + unit/2}
    //             radius={unit/2.50}
    //             fill={colors[2]}
    //           />
    //           <Circle 
    //             x={position[0] + unit/2}
    //             y={position[1] + unit/2}
    //             radius={unit/2.75}
    //             fill={colors[1]}
    //           />
    //         </Group>
    //       );
    //     }
    //   }
    // });

    return(
      <Group>{pieces}</Group>
    );
  }
}

export default PieceGroup;