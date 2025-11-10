import {
  type Edge,
  type Node,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
} from "@xyflow/react";
import { type ToggleNode } from "../domain/gates/toggleNode";
import { type NotGate } from "../domain/gates/notGate";
import { type AndGate } from "../domain/gates/andGate";
import { LightBulbNode } from "../domain/gates/lightBulbNode";
import { XorGate } from "../domain/gates/xorGate";

export type ToggleNodeElement = Node<
  {
    domain: ToggleNode;
  },
  "toggle"
>;

export type NotGateElement = Node<
  {
    domain: NotGate;
  },
  "notGate"
>;

export type AndGateElement = Node<
  {
    domain: AndGate;
  },
  "andGate"
>;

export type XorGateElement = Node<
  {
    domain: XorGate;
  },
  "xorGate"
>;

export type LightBulbNodeElement = Node<
  {
    domain: LightBulbNode;
  },
  "lightBulbNode"
>;

export type AppNode =
  | AndGateElement
  | XorGateElement
  | ToggleNodeElement
  | NotGateElement
  | LightBulbNodeElement;

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
