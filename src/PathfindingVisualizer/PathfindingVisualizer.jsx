import React from 'react';
import './PathfindingVisualizer.css';
import Node from './Node/Node';
import { dijkstra, getNodesInShortestPathOrder } from '../algorithms/dijkstra';

//Inital setting
const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;
const grid = [];

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

//Initializing the grid
for (let row = 0; row < 20; row++) {
  const currentRow = [];
  for (let col = 0; col < 50; col++) {
    currentRow.push(createNode(row, col));
  }
  grid.push(currentRow);
}

//JSX rendering
const PathfindingVisualizer = () => {
  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodeInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    console.log(nodesInShortestPathOrder);
    console.log(visitedNodeInOrder);
  };

  return (
    <>
      <button onClick={visualizeDijkstra}>Visualize Dijkstar's algorithm</button>
      <div className="grid">
        {grid.map((row, rowIdx) => (
          <div key={rowIdx}>
            {row.map((node, nodeIdx) => {
              const { isStart, isFinish, isWall, row, col } = node;
              return (
                <Node
                  row={row}
                  col={col}
                  key={nodeIdx}
                  isStart={isStart}
                  isFinish={isFinish}
                  isWall={isWall}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default PathfindingVisualizer;
