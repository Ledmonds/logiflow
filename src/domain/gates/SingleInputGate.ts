import { CreateId } from "../../common/services/idFactory";
import { ILogicGate } from "./logicGate.interface";
import { Connector } from "../connector";
import { NodeId } from "../../common/ids/logicGateId";
import { Position } from "../position";

export abstract class SingleInputGate implements ILogicGate {
  public readonly position: Position;
  public static kind: string = "single";
  public nodeType: string = SingleInputGate.kind;
  public abstract nodeName: string;
  public readonly output: Connector = new Connector();
  public readonly id: NodeId = CreateId(NodeId);
  public readonly input: Connector = new Connector();

  constructor(x: number, y: number) {
    this.position = new Position(x, y);
  }

  public abstract evaluate(): boolean | null;

  public setInput(value: boolean | null) {
    this.input.setActive(value);
  }

  public isEvaluatable(): boolean {
    return this.input.isSet();
  }
}
