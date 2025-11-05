import { Handle, type NodeProps, Position } from "@xyflow/react";

import { type LightBulbNodeElement } from "../types";

function LightBulb({ id, data }: NodeProps<LightBulbNodeElement>) {
  const isOn = data.domain.evaluate();

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
        viewBox="0 0 80 100"
        width="80"
        height="100"
      >
        {/* Bulb glass */}
        <circle
          cx="40"
          cy="35"
          r="25"
          fill={isOn ? "#FFEB3B" : "#ddd"} // glowing yellow or off-gray
          stroke={isOn ? "#FBC02D" : "#999"}
          strokeWidth="4"
        />
        {/* Filament */}
        <line
          x1="30"
          y1="35"
          x2="50"
          y2="35"
          stroke={isOn ? "#FF9800" : "#666"}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Base */}
        <rect
          x="30"
          y="60"
          width="20"
          height="15"
          fill="#666"
          stroke="#444"
          strokeWidth="2"
          rx="3"
        />
      </svg>

      {/* Input handle */}
      <Handle type="target" position={Position.Left} id="input" />
    </div>
  );
}

export default LightBulb;
