import {
  type Edge,
  type Node,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  BuiltInNode,
} from "@xyflow/react";
import { Toggle } from "../domain/gates/Toggle";
import { NotGate } from "../domain/gates/NotGate";
import { AndGate } from "../domain/gates/AndGate";
import { Diagram } from "../domain/Diagram";

export type ToggleNode = Node<
  {
    domain: Toggle;
  },
  "toggle"
>;

export type NotGateNode = Node<
  {
    domain: NotGate;
  },
  "notGate"
>;

export type AndGateNode = Node<
  {
    domain: AndGate;
  },
  "andGate"
>;

export type AppNode = AndGateNode | ToggleNode | NotGateNode;

export type AppState = {
  edges: Edge[];
  nodes: AppNode[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
  toggleToggleNode: (nodeId: string) => void;
};
