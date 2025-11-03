import { ConnectorId } from "../common/ids/ConnectorId";
import { EdgeId } from "../common/ids/EdgeId";
import { CreateId } from "../common/services/IdFactory";

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
