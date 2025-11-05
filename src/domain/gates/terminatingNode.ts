import { ConnectorId } from "../../common/ids/connectorId";
import { NodeId } from "../../common/ids/logicGateId";
import { CreateId } from "../../common/services/idFactory";
import { Connector } from "../connector";
import { Position } from "../position";
import { INode } from "./node.interface";

export abstract class TerminatingNode implements INode {
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

  public setInput(connectorId: ConnectorId, value: boolean | null) {
    var connector = this.getConnectorById(connectorId);

    connector.setActive(value);
  }

  public abstract evaluate(): boolean | null;

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
