import { Edge } from "../../src/domain/edge";
import { Id } from "../../src/common/ids/id";
import { ConnectorId } from "../../src/common/ids/connectorId";

describe("Edges active state", () => {
  var incomingConnectorId = new ConnectorId("node-1");
  var outgoingConnectorId = new ConnectorId("node-2");

  it("should be deactivated initially", () => {
    const edge = new Edge(incomingConnectorId, outgoingConnectorId);
    expect(edge.isActivated()).toBe(false);
  });

  it("should be activated after toggling", () => {
    const edge = new Edge(incomingConnectorId, outgoingConnectorId);
    edge.setActive(true);
    expect(edge.isActivated()).toBe(true);
  });
});

describe("Edges Id", () => {
  var nodeId = new ConnectorId("node-1");

  it("should throw an error when connecting a node to itself", () => {
    expect(() => new Edge(nodeId, nodeId)).toThrow(
      "An edge cannot connect a node to itself"
    );
  });
});
