import { Dictionary } from "../common/Dictionary";
import { Edge } from "./Edge";
import { IDictionary } from "../common/IDictionary";
import { ILogicGate } from "./gates/ILogicGate";
import { Toggle } from "./gates/Toggle";
import { TryGetResponse } from "../common/TryGetResponse";
import { INode } from "./gates/INode";
import { IQueue } from "../common/IQueue";
import { Queue } from "../common/Queue";
import { SingleInputGate } from "./gates/SingleInputGate";
import { NodeId } from "../common/ids/LogicGateId";
import { ConnectorId } from "../common/ids/ConnectorId";
import { DualInputLogicGate } from "./gates/DualInputLogicGate";
import { Connector } from "./gates/Connector";

export class Diagram {
    private connectors: IDictionary<ConnectorId, INode> = new Dictionary<ConnectorId, INode>();
    private edges: Edge[] = [];
    private gates: IDictionary<NodeId, ILogicGate> = new Dictionary<NodeId, ILogicGate>();
    private toggles: IDictionary<NodeId, Toggle> = new Dictionary<NodeId, Toggle>();
    private simulationQueue: IQueue<INode> = new Queue<INode>();

    public addToggle(toggle: Toggle) {
        this.toggles.add(toggle.id, toggle);

        this.connectors.add(toggle.output.id, toggle);
    }

    private tryGetNode(id: NodeId) : TryGetResponse<INode> {
        var toggle = this.toggles.tryGet(id);
        if (toggle.result) {
            return toggle;
        }
        
        var gate = this.gates.tryGet(id);
        if (gate.result) {
            return gate;
        }

        return TryGetResponse.failed();
    }

    public connectGates(output: Connector, input: Connector) {
        var edge = new Edge(output.id, input.id);
        this.edges.push(edge);
        
        var outputGate = this.connectors.get(output.id);

        if (outputGate.isEvaluatable())
        {
            this.simulationQueue.enqueue(outputGate);
        }
    }

    public addGate(gate: ILogicGate) {
        this.gates.add(gate.id, gate);

        if (gate.kind == SingleInputGate.kind) {
            this.connectors.add((gate as SingleInputGate).input.id, gate);
            this.connectors.add((gate as SingleInputGate).output.id, gate);
        }
        else if (gate.kind == DualInputLogicGate.kind) {
            this.connectors.add((gate as DualInputLogicGate).inputA.id, gate);
            this.connectors.add((gate as DualInputLogicGate).inputB.id, gate);
            this.connectors.add((gate as DualInputLogicGate).output.id, gate);
        }
    }

    public simulate()
    {
        while(!this.simulationQueue.isEmpty())
        {
            var outputNode = this.simulationQueue.dequeue();

            var evaluation = outputNode.evaluate()!;
            var edge = this.tryGetEdge(outputNode.output.id);

            // We have hit a node without an outgoing edge, simulation cannot continue on this path
            if (!edge.result) {
                continue;
            }

            edge.item!.setActive(evaluation);

            var nextGate = this.connectors.get(edge.item!.outgoingConnectorId);

            if (nextGate.kind == SingleInputGate.kind) {
                (nextGate as SingleInputGate).setInput(evaluation);
            }
            else if (nextGate.kind == DualInputLogicGate.kind)
            {
                (nextGate as DualInputLogicGate).setInput(edge.item!.outgoingConnectorId, evaluation);
            }

            if (nextGate.isEvaluatable())
            {
                this.simulationQueue.enqueue(nextGate);
            }
        }
    }

    private tryGetEdge(nodeId: ConnectorId) : TryGetResponse<Edge> {
        var edge = this.edges.find(edge => edge.incomingConnectorId.equals(nodeId));

        return edge == undefined
            ? TryGetResponse.failed()
            : TryGetResponse.success(edge);
    }
}