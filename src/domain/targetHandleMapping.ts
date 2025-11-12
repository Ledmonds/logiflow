import { EdgeId } from "../common/ids/edgeId";
import { NodeId } from "../common/ids/logicGateId";

export class TargetHandleMapping {
  public readonly edgeId: EdgeId;
  public readonly sourceNodeId: NodeId | null;
  public readonly targetNodeId: NodeId | null;
  public readonly targetHandle: number | null;

  constructor(
    edgeId: EdgeId,
    sourceNodeId: NodeId | null,
    targetNodeId: NodeId | null,
    targetHandle: number | null
  ) {
    this.edgeId = edgeId;
    this.sourceNodeId = sourceNodeId;
    this.targetNodeId = targetNodeId;
    this.targetHandle = targetHandle;
  }
}
