import { ConnectorId } from "../common/ids/connectorId";
import { CreateId } from "../common/services/idFactory";

export class Connector {
  private _active: boolean | null = null;
  public readonly id: ConnectorId = CreateId(ConnectorId);

  public isActive(): boolean | null {
    return this._active;
  }

  public isSet(): boolean {
    return this._active != null;
  }

  public setActive(active: boolean | null): void {
    this._active = active;
  }
}
