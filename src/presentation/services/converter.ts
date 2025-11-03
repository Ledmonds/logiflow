import { Diagram } from "../../domain/diagram";

export function ConvertEdges(diagram: Diagram): any[] {
  return diagram.getEdges().map((edge) => {
    var source = diagram.getNodeByConnectorId(edge.sourceId);
    var target = diagram.getNodeByConnectorId(edge.targetId);

    return {
      id: edge.id.Id,
      source: source.result ? source.item!.id.Id : null,
      target: target.result ? target.item!.id.Id : null,
      type: "smoothstep",
      animated: false,
    };
  });
}

export default function ConvertNodes(diagram: Diagram): any[] {
  return diagram.getNode().map((gate) => {
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
