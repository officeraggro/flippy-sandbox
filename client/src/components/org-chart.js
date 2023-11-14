import { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

import ResizeRotateNode from "./resize-rotate-node";
import { initialNodes, initialEdges } from "./nodes-edges";
import { Link } from "react-router-dom";

const nodeTypes = {
  resizeRotate: ResizeRotateNode,
};

const OrgChart = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const chartStyle = {
    height: 800,
    width: 1000,
  };

  return (
    <>
    <div className='go-home-link'>
      <Link to="/">Back</Link>
    </div>
      <div className="flow-container">
        <div className="flow-container-item">
          <div style={chartStyle}>
            <ReactFlow
              nodes={nodes}
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              edges={edges}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
            >
              <Background />
              <Controls />
              <MiniMap />
            </ReactFlow>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgChart;
