import { NodeId } from "../../common/ids/logicGateId";
import { CreateId } from "../../common/services/idFactory";
import { Connector } from "../connector";
import { Position } from "../position";
import { INode } from "./node.interface";

export abstract class OutputNode implements INode {
  public readonly id: NodeId = CreateId(NodeId);
  public abstract readonly position: Position;
  public abstract readonly nodeName: string;
  public readonly output: Connector = new Connector();

  public abstract evaluate(): boolean | null;
  public abstract isEvaluatable(): boolean;
}
