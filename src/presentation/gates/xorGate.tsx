import { Handle, type NodeProps, Position } from "@xyflow/react";
import { XorGateElement } from "../types";

function XorGate({ id, data }: NodeProps<XorGateElement>) {
  return (
    <div
      style={{
        width: 100,
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 80"
        width="100"
        height="80"
      >
        {/* Outer XOR shape */}
        <path
          d="M20,10 Q50,10 70,40 Q50,70 20,70"
          fill={"#4CAF50"}
          stroke={"#2E7D32"}
          strokeWidth="4"
        />

        {/* Inner curve (the “extra” line for XOR) */}
        <path
          d="M15,10 Q45,10 65,40 Q45,70 15,70"
          fill="none"
          stroke={"#2E7D32"}
          strokeWidth="3"
        />
      </svg>

      {/* Two input handles (left side) */}
      <Handle
        type="target"
        position={Position.Left}
        id="inputA"
        style={{ top: "30%" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="inputB"
        style={{ top: "70%" }}
      />

      {/* One output handle (right side) */}
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
}

export default XorGate;
