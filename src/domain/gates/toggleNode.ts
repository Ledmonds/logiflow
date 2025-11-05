import { NodeId } from "../../common/ids/logicGateId";
import { CreateId } from "../../common/services/idFactory";
import { Connector } from "../connector";
import { Position } from "../position";
import { OutputNode } from "./outputNode";

export class ToggleNode extends OutputNode {
  private active: boolean = true;
  public readonly position: Position;
  public static kind: string = "toggle";
  public nodeName: string = ToggleNode.kind;
  public nodeType: string = ToggleNode.kind;
  public readonly id: NodeId = CreateId(NodeId);
  public readonly output: Connector = new Connector();

  constructor(x: number, y: number) {
    super();
    this.position = new Position(x, y);
  }

  toggle(): void {
    this.active = !this.active;
  }

  isEvaluatable = () => true;
  evaluate = () => this.active;
}
