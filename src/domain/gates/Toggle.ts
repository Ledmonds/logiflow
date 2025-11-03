import { NodeId } from "../../common/ids/logicGateId";
import { CreateId } from "../../common/services/idFactory";
import { Connector } from "../connector";
import { Position } from "../position";
import { ILogicGate } from "./logicGate.interface";

export class Toggle implements ILogicGate {
  private active: boolean = true;
  public readonly position: Position;
  public static kind: string = "toggle";
  public nodeName: string = Toggle.kind;
  public nodeType: string = Toggle.kind;
  public readonly id: NodeId = CreateId(NodeId);
  public readonly output: Connector = new Connector();

  constructor(x: number, y: number) {
    this.position = new Position(x, y);
  }

  toggle(): void {
    this.active = !this.active;
  }

  isEvaluatable = () => true;
  evaluate = () => this.active;
}
