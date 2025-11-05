import { NodeId } from "../../common/ids/logicGateId";
import { Position } from "../position";

export interface INode {
  readonly id: NodeId;
  readonly nodeName: string;
  readonly position: Position;
  isEvaluatable(): boolean;
  evaluate(): boolean | null;
}
