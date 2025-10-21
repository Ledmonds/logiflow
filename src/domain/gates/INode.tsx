import { NodeId } from "../../common/ids/LogicGateId";
import { Connector } from "../Connector";

export interface INode {
  id: NodeId;
  nodeType: string;
  nodeName: string;
  output: Connector;
  isEvaluatable(): boolean;
  evaluate(): boolean | null;
}
