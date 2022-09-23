import React from 'react';
import './Node.css';

const Node = ({ isStart, isFinish }) => {
  const nodeStartClass = isStart ? 'node-start' : '';
  const nodeFinishClass = isFinish ? 'node-finish' : '';
  return <div className={`node ${nodeStartClass} ${nodeFinishClass}`}></div>;
};
export default Node;
