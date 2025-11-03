import { ConnectorId } from "../common/ids/connectorId";
import { EdgeId } from "../common/ids/edgeId";
import { CreateId } from "../common/services/idFactory";

export class Edge {
  private isActive: boolean = false;
  public readonly id: EdgeId = CreateId(EdgeId);
  public readonly targetId: ConnectorId;
  public readonly sourceId: ConnectorId;

  constructor(source: ConnectorId, target: ConnectorId) {
    if (source.equals(target)) {
      throw new Error("An edge cannot connect a node to itself");
    }

    this.sourceId = source;
    this.targetId = target;
  }

  setActive(active: boolean) {
    this.isActive = active;
  }

  isActivated = (): boolean => this.isActive;
}
