import {
  type Edge,
  type Node,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  BuiltInNode,
} from "@xyflow/react";
import { Toggle } from "../domain/gates/toggle";
import { NotGate } from "../domain/gates/notGate";
import { AndGate } from "../domain/gates/andGate";
import { Diagram } from "../domain/diagram";

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
