import { ConnectorId } from '../common/ids/ConnectorId';
import { EdgeId } from '../common/ids/EdgeId';
import { CreateId } from '../common/services/IdFactory';

export class Edge {
    private isActive: boolean = false;
    public readonly id: EdgeId = CreateId(EdgeId);
    public readonly incomingConnectorId: ConnectorId;
    public readonly outgoingConnectorId: ConnectorId;

    constructor(incomingNodeId: ConnectorId, outgoingNodeId: ConnectorId) {
        if (incomingNodeId.equals(outgoingNodeId)) {
            throw new Error("An edge cannot connect a node to itself");
        }

        this.incomingConnectorId = incomingNodeId;
        this.outgoingConnectorId = outgoingNodeId;
    }

    setActive(active: boolean) {
        this.isActive = active;
    }

    isActivated = (): boolean =>  this.isActive;
}
