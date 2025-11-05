import { Handle, type NodeProps, Position } from "@xyflow/react";
import { type AndGateElement } from "../types";

function AndGate({ id, data }: NodeProps<AndGateElement>) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 64 64"
      >
        <path
          d="M10 10 L30 10 A22 22 0 0 1 30 54 L10 54 Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <line x1="0" y1="20" x2="10" y2="20" stroke="black" strokeWidth="2" />
        <line x1="0" y1="44" x2="10" y2="44" stroke="black" strokeWidth="2" />
        <line x1="52" y1="32" x2="64" y2="32" stroke="black" strokeWidth="2" />
      </svg>

      <Handle
        id="inputA"
        type="target"
        position={Position.Left}
        style={{ top: 16, left: -3 }}
      />

      <Handle
        id="inputB"
        type="target"
        position={Position.Left}
        style={{ top: 35, left: -3 }}
      />

      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
}

export default AndGate;
