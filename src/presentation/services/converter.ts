import { Diagram } from "../../domain/diagram";

export function ConvertEdges(diagram: Diagram): any[] {
  return diagram.getEdges().map((edge) => {
    const edgeNodeMapping = diagram.getEdgeNodeMapping(edge.id);

    var targetHandle;
    switch (edgeNodeMapping.targetHandle) {
      case 0: {
        targetHandle = "inputA";
        break;
      }
      case 1: {
        targetHandle = "inputB";
        break;
      }
      default: {
        targetHandle = null;
        break;
      }
    }

    return {
      id: edge.id.Id,
      source: edgeNodeMapping.sourceNodeId?.Id,
      target: edgeNodeMapping.targetNodeId?.Id,
      targetHandle: targetHandle,
      type: "smoothstep",
      animated: edge.isActivated(),
    };
  });
}

export default function ConvertNodes(diagram: Diagram): any[] {
  return diagram.getNodes().map((gate) => {
    return {
      id: gate.id.Id,
      type: gate.nodeName,
      data: {
        domain: gate,
      },
      position: { x: gate.position.getX(), y: gate.position.getY() },
    };
  });
}
