import { Dictionary } from "../common/dictionary";
import { Edge } from "./edge";
import { IDictionary } from "../common/dictionary.interface";
import { TryGetResponse } from "../common/tryGetResponse";
import { INode } from "./gates/node.interface";
import { IQueue } from "../common/queue.interface";
import { Queue } from "../common/queue";
import { NodeId } from "../common/ids/logicGateId";
import { ConnectorId } from "../common/ids/connectorId";
import { Connector } from "./connector";
import { LogicGate } from "./gates/logicGate";
import { OutputNode } from "./gates/outputNode";
import { TerminatingNode } from "./gates/terminatingNode";
import { ToggleNode } from "./gates/toggleNode";

export class Diagram {
  private connectors: IDictionary<ConnectorId, INode> = new Dictionary<
    ConnectorId,
    INode
  >();
  private edges: Edge[] = [];
  private nodes: IDictionary<NodeId, INode> = new Dictionary<NodeId, INode>();
  private simulationQueue: IQueue<INode> = new Queue<INode>();

  public getNodeByConnectorId(connectorId: ConnectorId): TryGetResponse<INode> {
    return this.connectors.tryGet(connectorId);
  }

  // has GB overhead through creating a new collection - consider something like a readonly wrapper for Array
  public getEdges(): Edge[] {
    return this.edges;
  }

  // has GB overhead through creating a new collection - consider something like a readonly wrapper for Array
  public getNodes(): INode[] {
    return this.nodes.asReadOnly();
  }

  public getNode(id: NodeId): INode {
    return this.nodes.get(id);
  }

  public toggle(id: NodeId) {
    const toggle = this.nodes.get(id);

    if (toggle instanceof ToggleNode) {
      toggle.toggle();
      this.simulationQueue.enqueue(toggle);
      this.simulate();
    }
  }

  public connectGates(source: Connector, target: Connector) {
    const edge = new Edge(source.id, target.id);
    this.edges.push(edge);

    const sourceNode = this.connectors.get(source.id);

    if (sourceNode.isEvaluatable()) {
      this.simulationQueue.enqueue(sourceNode);
    }

    this.simulate();
  }

  public addNode(node: INode) {
    this.nodes.add(node.id, node);

    if (node instanceof LogicGate || node instanceof TerminatingNode) {
      for (var i = 0; i < node.inputs.length; ++i) {
        this.connectors.add(node.inputs[i].id, node);
      }
    }

    if (node instanceof OutputNode) {
      this.connectors.add(node.output.id, node);
    }
  }

  private simulate() {
    while (!this.simulationQueue.isEmpty()) {
      const sourceNode = this.simulationQueue.dequeue();

      const evaluation = sourceNode.evaluate()!;

      // node with no outputs, and therefore cannot simulate further
      if (!(sourceNode instanceof OutputNode)) {
        continue;
      }

      const edgeResult = this.tryGetEdge(sourceNode.output.id);

      // node without an outgoing edge, simulation cannot continue
      if (!edgeResult.result) {
        continue;
      }

      const edge = edgeResult.item!;

      edge.setActive(evaluation);

      const targetNode = this.connectors.get(edge.targetId);

      if (
        targetNode instanceof LogicGate ||
        targetNode instanceof TerminatingNode
      ) {
        targetNode.setInput(edge.targetId, evaluation);
      }

      if (targetNode.isEvaluatable()) {
        this.simulationQueue.enqueue(targetNode);
      }
    }
  }

  private tryGetEdge(nodeId: ConnectorId): TryGetResponse<Edge> {
    const edge = this.edges.find(
      (edge) => edge.sourceId.equals(nodeId) || edge.targetId.equals(nodeId)
    );

    return edge == undefined
      ? TryGetResponse.failed()
      : TryGetResponse.success(edge);
  }
}
