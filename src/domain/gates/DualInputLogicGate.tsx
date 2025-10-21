import { CreateId } from "../../common/services/IdFactory";
import { ILogicGate } from "./ILogicGate";
import { Connector } from "../Connector";
import { NodeId } from "../../common/ids/LogicGateId";
import { ConnectorId } from "../../common/ids/ConnectorId";

export abstract class DualInputLogicGate implements ILogicGate {
  public static kind: string = "dual";
  public nodeType: string = DualInputLogicGate.kind;
  public abstract nodeName: string;
  public readonly id: NodeId = CreateId(NodeId);
  public readonly inputA: Connector = new Connector();
  public readonly inputB: Connector = new Connector();
  public readonly output: Connector = new Connector();

  public abstract evaluate(): boolean | null;

  public setInput(connectorId: ConnectorId, value: boolean | null) {
    var connector = this.getConnectorById(connectorId);

    connector.setActive(value);
  }

  public isEvaluatable(): boolean {
    return this.inputA.isSet() && this.inputB.isSet();
  }

  private getConnectorById(id: ConnectorId) {
    if (this.inputA.id.equals(id)) {
      return this.inputA;
    }

    if (this.inputB.id.equals(id)) {
      return this.inputB;
    }

    throw new Error(
      "connector with the provided id does not exist for this edge"
    );
  }
}
