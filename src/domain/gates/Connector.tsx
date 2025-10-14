import { ConnectorId } from '../../common/ids/ConnectorId';
import { CreateId } from '../../common/services/IdFactory';

export class Connector {
    private _active: boolean | null = null; 
    public readonly id: ConnectorId = CreateId(ConnectorId);
    
    public isActive(): boolean | null
    {
        return this._active;
    }

    public isSet(): boolean {
        return this._active != null;
    }

    public setActive(active: boolean | null): void {
        this._active = active;
    }
}
