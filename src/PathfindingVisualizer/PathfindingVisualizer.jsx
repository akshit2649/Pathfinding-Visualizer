import React, { useEffect, useState } from 'react';
import './PathfindingVisualizer.css';
import Node from './Node/Node';
import { dijkstra, getNodesInShortestPathOrder } from '../algorithms/dijkstra';

//Inital setting
const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

const createNode = (row, col) => {
  return {
    row,
    col,
    isStart: START_NODE_ROW === row && START_NODE_COL === col,
    isFinish: FINISH_NODE_ROW === row && FINISH_NODE_COL === col,
    distance: Infinity,
    isVisited: false,
    isVisitedAnimate: false,
    isWall: false,
    previousNode: null,
  };
};

//JSX rendering
const PathfindingVisualizer = () => {
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  useEffect(() => {
    //Initializing the grid
    const tempGrid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(row, col));
      }
      tempGrid.push(currentRow);
    }
    setGrid(tempGrid);
  }, []);

  const getNewGridWithWallToggled = (row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: true,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  //handling mouse events for creating walls
  const mouseDownHandler = (row, col) => {
    const newGrid = getNewGridWithWallToggled(row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };
  const mouseEnterHandler = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(row, col);
    setGrid(newGrid);
  };
  const mouseUpHandler = () => {
    setMouseIsPressed(false);
  };

  //Logic for animation
  const animateDijkstra = visitedNodeInOrder => {
    for (let i = 0; i < visitedNodeInOrder.length; i++) {
      setTimeout(() => {
        const node = visitedNodeInOrder[i];
        const newGrid = grid.slice();
        const newNode = {
          ...node,
          isVisitedAnimate: true,
        };
        newGrid[node.row][node.col] = newNode;
        setGrid(newGrid);
      }, 25 * i);
    }
  };

  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodeInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodeInOrder);
  };

  return (
    <>
      <button onClick={visualizeDijkstra}>Visualize Dijkstar's algorithm</button>
      <div className="grid">
        {grid.map((row, rowIdx) => (
          <div key={rowIdx}>
            {row.map((node, nodeIdx) => {
              const { isStart, isFinish, isWall, row, col, isVisitedAnimate } = node;
              return (
                <Node
                  row={row}
                  col={col}
                  key={nodeIdx}
                  isStart={isStart}
                  isFinish={isFinish}
                  isWall={isWall}
                  isVisited={isVisitedAnimate}
                  mouseDownHandler={mouseDownHandler}
                  mouseUpHandler={mouseUpHandler}
                  mouseEnterHandler={mouseEnterHandler}
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
