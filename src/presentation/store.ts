import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  isNode,
  NodePositionChange,
} from "@xyflow/react";

import { initialDiagram } from "./initialDiagram";
import { AppNode, ToggleNodeElement, type AppState } from "./types";
import ConvertNodes, { ConvertEdges } from "./services/converter";
import { NodeId } from "../common/ids/logicGateId";

function isToggleNode(node: AppNode): node is ToggleNodeElement {
  return true;
}

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<AppState>((set, get) => ({
  edges: ConvertEdges(initialDiagram),
  nodes: ConvertNodes(initialDiagram),
  diagram: initialDiagram,

  onNodesChange: (changes) => {
    for (var i = 0; i < changes.length; ++i) {
      if (changes[i].type === "position") {
        const positionChange = changes[i] as NodePositionChange;
        const node = initialDiagram.getNode(new NodeId(positionChange.id));
        node.position.setPosition(
          positionChange.position!.x,
          positionChange.position!.y
        );
      }
    }

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
    initialDiagram.toggle(new NodeId(nodeId));

    const updatedNodes = ConvertNodes(initialDiagram);
    const updatedEdges = ConvertEdges(initialDiagram);

    set({
      nodes: updatedNodes,
      edges: updatedEdges,
    });
  },
}));

export default useStore;
