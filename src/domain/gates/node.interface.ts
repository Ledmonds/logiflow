import { NodeId } from "../../common/ids/logicGateId";
import { Connector } from "../connector";

export interface INode {
  id: NodeId;
  nodeType: string;
  nodeName: string;
  output: Connector;
  isEvaluatable(): boolean;
  evaluate(): boolean | null;
}
