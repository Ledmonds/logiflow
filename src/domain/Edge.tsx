import { Id } from '../common/Id';
import { CreateId } from '../common/services/IdFactory';

export class Edge {
    private isActive: boolean = false;
    readonly id: Id = CreateId();
    readonly incomingNodeId: Id;
    readonly outgoingNodeId: Id;

    constructor(incomingNodeId: Id, outgoingNodeId: Id) {
        if (incomingNodeId.equals(outgoingNodeId)) {
            throw new Error("An edge cannot connect a node to itself");
        }

        this.incomingNodeId = incomingNodeId;
        this.outgoingNodeId = outgoingNodeId;
    }

    setActive(active: boolean) {
        this.isActive = active;
    }

    isActivated = (): boolean =>  this.isActive;
}
