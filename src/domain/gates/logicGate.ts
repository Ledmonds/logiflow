import { CreateId } from "../../common/services/idFactory";
import { Connector } from "../connector";
import { NodeId } from "../../common/ids/logicGateId";
import { ConnectorId } from "../../common/ids/connectorId";
import { Position } from "../position";
import { INode } from "./node.interface";

export abstract class LogicGate implements INode {
  public readonly position: Position;
  public abstract nodeName: string;
  public readonly id: NodeId = CreateId(NodeId);
  abstract inputs: Connector[];
  public readonly output: Connector = new Connector();

  constructor(x: number, y: number) {
    this.position = new Position(x, y);
  }

  public abstract evaluate(): boolean | null;

  public setInput(connectorId: ConnectorId, value: boolean | null) {
    var connector = this.getConnectorById(connectorId);

    connector.setActive(value);
  }

  public isEvaluatable(): boolean {
    return this.inputs.filter((input) => !input.isSet()).length == 0;
  }

  private getConnectorById(id: ConnectorId) {
    var input = this.inputs.filter((input) => input.id.equals(id));

    if (input.length == 0 || input.length > 1) {
      throw new Error(
        "connector with the provided id does not exist for this edge"
      );
    }

    return input[0];
  }
}
