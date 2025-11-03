import { CreateId } from "../../common/services/IdFactory";
import { ILogicGate } from "./ILogicGate";
import { Connector } from "../Connector";
import { NodeId } from "../../common/ids/LogicGateId";

export abstract class SingleInputGate implements ILogicGate {
  public static kind: string = "single";
  public nodeType: string = SingleInputGate.kind;
  public abstract nodeName: string;
  public readonly output: Connector = new Connector();
  public readonly id: NodeId = CreateId(NodeId);
  public readonly input: Connector = new Connector();

  public abstract evaluate(): boolean | null;

  public setInput(value: boolean | null) {
    this.input.setActive(value);
  }

  public isEvaluatable(): boolean {
    return this.input.isSet();
  }
}
