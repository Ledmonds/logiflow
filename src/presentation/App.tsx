import { useShallow } from "zustand/react/shallow";
import { ReactFlow, Background, Controls, MiniMap } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import useStore from "./store";
import Toggle from "./gates/toggleNode";
import NotGate from "./gates/notGate";
import AndGate from "./gates/andGate";
import LightBulb from "./gates/lightBulbNode";
import XorGate from "./gates/xorGate";
import OrGate from "./gates/orGate";

const selector = (state: any) => ({
  diagram: state.diagram,
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const nodeTypes = {
  toggle: Toggle,
  notGate: NotGate,
  andGate: AndGate,
  xorGate: XorGate,
  orGate: OrGate,
  lightBulbNode: LightBulb,
};

function Flow() {
  const { edges, nodes, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector)
  );

  const toggleToggleNode = useStore((s) => s.toggleToggleNode);
  const onNodeClick = (event: any, node: any) => toggleToggleNode(node.id);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodeClick={onNodeClick}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      snapToGrid={true}
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default Flow;
