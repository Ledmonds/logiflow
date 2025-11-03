import { NodeId } from "../../common/ids/logicGateId";
import { Connector } from "../connector";
import { Position } from "../position";

export interface INode {
  id: NodeId;
  nodeName: string;
  output: Connector;
  position: Position;
  isEvaluatable(): boolean;
  evaluate(): boolean | null;
}
