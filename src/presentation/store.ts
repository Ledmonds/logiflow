import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  isNode,
} from "@xyflow/react";

import { initialDiagram } from "./initialDiagram";
import { AppNode, ToggleNodeElement, type AppState } from "./types";
import ConvertNodes, { ConvertEdges } from "./services/converter";

function isToggleNode(node: AppNode): node is ToggleNodeElement {
  return true;
}

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<AppState>((set, get) => ({
  edges: ConvertEdges(initialDiagram),
  nodes: ConvertNodes(initialDiagram),
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
  toggleToggleNode: (nodeId) => {
    const { nodes, edges } = get();
    var activeEdge = false;

    // Update nodes
    const updatedNodes = nodes.map((node) => {
      if (node.id === nodeId && isToggleNode(node)) {
        node.data.domain.toggle();
        activeEdge = node.data.domain.evaluate();

        return { ...node, data: { ...node.data } };
      }
      return node;
    });

    const connectedEdge = edges.filter((e) => e.source === nodeId);

    const updatedEdges = edges.map((edge) => {
      if (connectedEdge.includes(edge)) {
        return {
          ...edge,
          animated: activeEdge,
        };
      }
      return edge;
    });

    set({
      nodes: updatedNodes,
      edges: updatedEdges,
    });
  },
}));

export default useStore;
