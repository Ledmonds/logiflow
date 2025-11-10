import { Handle, type NodeProps, Position } from "@xyflow/react";
import { OrGateElement } from "../types";

function OrGate({ id, data }: NodeProps<OrGateElement>) {
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
        {/* Outer OR gate curve */}
        <path
          d="M10 10 Q40 10 54 32 Q40 54 10 54 Q22 32 10 10 Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />

        {/* Input lines */}
        <line x1="0" y1="20" x2="10" y2="20" stroke="black" strokeWidth="2" />
        <line x1="0" y1="44" x2="10" y2="44" stroke="black" strokeWidth="2" />

        {/* Output line */}
        <line x1="54" y1="32" x2="64" y2="32" stroke="black" strokeWidth="2" />
      </svg>

      {/* Input A */}
      <Handle
        id="inputA"
        type="target"
        position={Position.Left}
        style={{ top: 16, left: -3 }}
      />

      {/* Input B */}
      <Handle
        id="inputB"
        type="target"
        position={Position.Left}
        style={{ top: 35, left: -3 }}
      />

      {/* Output */}
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
}

export default OrGate;
