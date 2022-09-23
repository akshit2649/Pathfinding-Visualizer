import React, { useEffect, useState } from 'react';
import './PathfindingVisualizer.css';
import Node from './Node/Node';

const PathfindingVisualizer = () => {
  const [node, setNode] = useState([]);

  useEffect(() => {
    const rowNodes = [];
    for (let row = 1; row <= 15; row++) {
      const currentCol = [];
      for (let col = 1; col <= 50; col++) {
        const currentNode = {
          row,
          col,
          isStart: row === 10 && col === 5,
          isFinish: row === 10 && col === 45,
        };
        currentCol.push(currentNode);
      }
      rowNodes.push(currentCol);
    }
    setNode(rowNodes);
  }, []);

  return (
    <div className="grid">
      {node.map((row, rowIdx) => (
        <div key={rowIdx}>
          {row.map((ele, nodeIdx) => {
            const { isStart, isFinish } = ele;
            return <Node key={nodeIdx} isStart={isStart} isFinish={isFinish} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default PathfindingVisualizer;
