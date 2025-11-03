import { Dictionary } from "../common/dictionary";
import { Edge } from "./edge";
import { IDictionary } from "../common/dictionary.interface";
import { ILogicGate } from "./gates/logicGate.interface";
import { Toggle } from "./gates/toggle";
import { TryGetResponse } from "../common/tryGetResponse";
import { INode } from "./gates/node.interface";
import { IQueue } from "../common/queue.interface";
import { Queue } from "../common/queue";
import { SingleInputGate } from "./gates/singleInputGate";
import { NodeId } from "../common/ids/logicGateId";
import { ConnectorId } from "../common/ids/connectorId";
import { DualInputLogicGate } from "./gates/dualInputLogicGate";
import { Connector } from "./connector";

export class Diagram {
  private connectors: IDictionary<ConnectorId, INode> = new Dictionary<
    ConnectorId,
    INode
  >();
  private edges: Edge[] = [];
  private nodes: IDictionary<NodeId, ILogicGate> = new Dictionary<
    NodeId,
    ILogicGate
  >();
  private simulationQueue: IQueue<INode> = new Queue<INode>();

  public getNodeByConnectorId(connectorId: ConnectorId): TryGetResponse<INode> {
    return this.connectors.tryGet(connectorId);
  }

  // has GB overhead through creating a new collection - consider something like a readonly wrapper for Array
  public getEdges(): Edge[] {
    return this.edges;
  }

  // has GB overhead through creating a new collection - consider something like a readonly wrapper for Array
  public getGates(): ILogicGate[] {
    return this.nodes.asReadOnly();
  }

  private tryGetNode(id: NodeId): TryGetResponse<INode> {
    var toggle = this.nodes.tryGet(id);
    if (toggle.result) {
      return toggle;
    }

    var node = this.nodes.tryGet(id);
    if (node.result) {
      return node;
    }

    return TryGetResponse.failed();
  }

  public connectGates(source: Connector, target: Connector) {
    var edge = new Edge(source.id, target.id);
    this.edges.push(edge);

    var sourceNode = this.connectors.get(source.id);

    if (sourceNode.isEvaluatable()) {
      this.simulationQueue.enqueue(sourceNode);
    }
  }

  public addNode(node: ILogicGate) {
    this.nodes.add(node.id, node);

    if (node.nodeType == SingleInputGate.kind) {
      this.connectors.add((node as SingleInputGate).input.id, node);
      this.connectors.add((node as SingleInputGate).output.id, node);
    } else if (node.nodeType == DualInputLogicGate.kind) {
      this.connectors.add((node as DualInputLogicGate).inputA.id, node);
      this.connectors.add((node as DualInputLogicGate).inputB.id, node);
      this.connectors.add((node as DualInputLogicGate).output.id, node);
    } else if (node.nodeType == Toggle.kind) {
      this.connectors.add((node as Toggle).output.id, node);
    }
  }

  public simulate() {
    while (!this.simulationQueue.isEmpty()) {
      var sourceNode = this.simulationQueue.dequeue();

      var evaluation = sourceNode.evaluate()!;
      var edge = this.tryGetEdge(sourceNode.output.id);

      // We have hit a node without an outgoing edge, simulation cannot continue on this path
      if (!edge.result) {
        continue;
      }

      edge.item!.setActive(evaluation);

      var targetNode = this.connectors.get(edge.item!.targetId);

      if (targetNode.nodeType == SingleInputGate.kind) {
        (targetNode as SingleInputGate).setInput(evaluation);
      } else if (targetNode.nodeType == DualInputLogicGate.kind) {
        (targetNode as DualInputLogicGate).setInput(
          edge.item!.targetId,
          evaluation
        );
      }

      if (targetNode.isEvaluatable()) {
        this.simulationQueue.enqueue(targetNode);
      }
    }
  }

  private tryGetEdge(nodeId: ConnectorId): TryGetResponse<Edge> {
    var edge = this.edges.find(
      (edge) => edge.sourceId.equals(nodeId) || edge.targetId.equals(nodeId)
    );

    return edge == undefined
      ? TryGetResponse.failed()
      : TryGetResponse.success(edge);
  }
}
