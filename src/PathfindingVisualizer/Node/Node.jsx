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
  isVisited,
}) => {
  const nodeStartClass = isStart ? 'node-start' : '';
  const nodeFinishClass = isFinish ? 'node-finish' : '';
  const nodeVisitedClass = isVisited ? 'node-visited' : '';
  const nodeWallClass = isWall ? 'node-wall' : '';
  return (
    <div
      className={`node ${nodeVisitedClass} ${nodeStartClass} ${nodeFinishClass} ${nodeWallClass} `}
      onMouseDown={() => mouseDownHandler(row, col)}
      onMouseUp={() => mouseUpHandler()}
      onMouseEnter={() => mouseEnterHandler(row, col)}
    ></div>
  );
};
export default Node;
