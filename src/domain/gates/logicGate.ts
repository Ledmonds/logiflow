import { CreateId } from "../../common/services/idFactory";
import { Connector } from "../connector";
import { NodeId } from "../../common/ids/logicGateId";
import { ConnectorId } from "../../common/ids/connectorId";
import { Position } from "../position";
import { OutputNode } from "./outputNode";

export abstract class LogicGate extends OutputNode {
  public readonly position: Position;
  public abstract readonly nodeName: string;
  public readonly id: NodeId = CreateId(NodeId);
  public abstract readonly inputs: Connector[];

  public constructor(x: number, y: number) {
    super();

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
