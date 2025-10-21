import { Handle, type NodeProps, Position } from "@xyflow/react";
import { type NotGateNode } from "../types";

function NotGateNode({ id, data }: NodeProps<NotGateNode>) {
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
        <polygon
          points="8,10 44,32 8,54"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <circle
          cx="49"
          cy="32"
          r="4"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <line x1="0" y1="32" x2="8" y2="32" stroke="black" strokeWidth="2" />
        <line x1="53" y1="32" x2="64" y2="32" stroke="black" strokeWidth="2" />
      </svg>

      <Handle
        id="input"
        type="target"
        position={Position.Left}
        style={{ top: 25, left: -3 }}
      />

      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{ top: 25, left: 43 }}
      />
    </div>
  );
}

export default NotGateNode;
