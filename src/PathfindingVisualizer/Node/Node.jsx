import React from 'react';
import './Node.css';

const Node = ({
  row,
  col,
  isWall,
  mouseDownHandler,
  mouseUpHandler,
  mouseEnterHandler,
  isStart,
  isFinish,
}) => {
  const nodeStartClass = isStart ? 'node-start' : '';
  const nodeFinishClass = isFinish ? 'node-finish' : '';
  const nodeWallClass = isWall ? 'node-wall' : '';
  return (
    <div
      id={`node-${row}-${col}`}
      className={`node  ${nodeStartClass} ${nodeFinishClass} ${nodeWallClass} `}
      onMouseDown={() => mouseDownHandler(row, col)}
      onMouseUp={() => mouseUpHandler()}
      onMouseEnter={() => mouseEnterHandler(row, col)}
    ></div>
  );
};
export default Node;
