import { Handle, type NodeProps, Position } from "@xyflow/react";

import useStore from "../store";
import { type ToggleNode } from "../types";

function ToggleNode({ id, data }: NodeProps<ToggleNode>) {
  const toggleToggleNode = useStore((state) => state.toggleToggleNode);

  return (
    <div
      style={{
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none", // optional
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 64 64"
      >
        <rect
          x="8"
          y="20"
          width="48"
          height="24"
          rx="12"
          ry="12"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <circle
          cx={data.domain.evaluate() ? "44" : "22"}
          cy="32"
          r="8"
          fill={data.domain.evaluate() ? "#4CAF50" : "#ccc"} // toggle color
          stroke={data.domain.evaluate() ? "#2E7D32" : "#999"}
          strokeWidth="2"
        />
        <line x1="56" y1="32" x2="66" y2="32" stroke="black" strokeWidth="2" />
      </svg>

      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{ top: 25, left: 45 }}
      />
    </div>
  );
}

export default ToggleNode;
