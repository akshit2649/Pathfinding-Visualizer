import React from 'react';
import './PathfindingVisualizer.css';
import Node from './Node/Node';
import { dijkstra } from '../algorithms/dijkstra';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

//Inital setting of the grid

const createNode = (row, col) => {
  return {
    row,
    col,
    isStart: START_NODE_ROW === row && START_NODE_COL === col,
    isFinish: FINISH_NODE_ROW === row && FINISH_NODE_COL === col,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

const grid = [];
for (let row = 1; row <= 15; row++) {
  const currentRow = [];
  for (let col = 1; col <= 50; col++) {
    currentRow.push(createNode(row, col));
  }
  grid.push(currentRow);
}

const PathfindingVisualizer = () => {
  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNode = dijkstra(grid, startNode, finishNode);
  };

  return (
    <>
      <button onClick={visualizeDijkstra}>Visualize Dijkstar's algorithm</button>
      <div className="grid">
        {grid.map((row, rowIdx) => (
          <div key={rowIdx}>
            {row.map((node, nodeIdx) => {
              const { isStart, isFinish } = node;
              return <Node key={nodeIdx} isStart={isStart} isFinish={isFinish} />;
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default PathfindingVisualizer;
