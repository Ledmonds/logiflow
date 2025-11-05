import { NodeId } from "../../common/ids/logicGateId";
import { CreateId } from "../../common/services/idFactory";
import { Connector } from "../connector";
import { Position } from "../position";
import { INode } from "./node.interface";

export abstract class TerminatingLogicGate implements INode {
  protected readonly _input = new Connector();
  public readonly id: NodeId = CreateId(NodeId);
  public abstract nodeName: string;
  public readonly position: Position;
  public readonly inputs: Connector[] = [this._input];

  constructor(x: number, y: number) {
    this.position = new Position(x, y);
  }

  public isEvaluatable(): boolean {
    return this.inputs.filter((input) => !input.isSet()).length == 0;
  }

  public abstract evaluate(): boolean | null;
}
