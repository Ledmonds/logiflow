import { Edge } from "../../src/domain/Edge";
import { Id } from "../../src/common/Id";

describe('Edges active state', () => {
    var incomingNodeId = new Id("node-1");
    var outgoingNodeId = new Id("node-2");

    it('should be deactivated initially', () => {
        const edge = new Edge(incomingNodeId, outgoingNodeId);
        expect(edge.isActivated()).toBe(false);
    });

    it('should be activated after toggling', () => {
        const edge = new Edge(incomingNodeId, outgoingNodeId);
        edge.setActive(true);
        expect(edge.isActivated()).toBe(true);
    });
});

describe('Edges Id', () => {
    var nodeId = new Id("node-1");

    it('should throw an error when connecting a node to itself', () => {
        expect(() => new Edge(nodeId, nodeId)).toThrow("An edge cannot connect a node to itself");
    });
});
