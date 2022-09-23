import React, { useEffect, useState } from 'react';
import './PathfindingVisualizer.css';
import Node from './Node/Node';

const PathfindingVisualizer = () => {
  const [node, setNode] = useState([]);

  useEffect(() => {
    const rowNodes = [];
    for (let row = 0; row <= 15; row++) {
      const currentCol = [];
      for (let col = 0; col <= 50; col++) {
        currentCol.push([]);
      }
      rowNodes.push(currentCol);
    }
    setNode(rowNodes);
    console.log(node);
  }, []);

  return (
    <div className="grid">
      {node.map((row) => (
        <div>
          {row.map(() => (
            <Node />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PathfindingVisualizer;
