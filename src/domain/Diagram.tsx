import { Dictionary } from "../common/Dictionary";
import { Edge } from "./Edge";
import { Id } from "../common/Id";
import { IDictionary } from "../common/IDictionary";
import { ILogicGate } from "./gates/ILogicGate";
import { Toggle } from "./gates/Toggle";
import { TryGetResponse } from "../common/TryGetResponse";
import { INode } from "./gates/INode";
import { IQueue } from "../common/IQueue";
import { Queue } from "../common/Queue";
import { SingleInputGate } from "./gates/SingleInputGate";

export class Diagram {
    private edges: Edge[] = [];
    private gates: IDictionary<Id, ILogicGate> = new Dictionary<Id, ILogicGate>();
    private toggles: IDictionary<Id, Toggle> = new Dictionary<Id, Toggle>();
    private simulationQueue: IQueue<INode> = new Queue<INode>();

    public addToggle(toggle: Toggle) {
        this.toggles.add(toggle.id, toggle);
    }

    private tryGetNode(nodeId: Id) : TryGetResponse<INode> {
        var toggle = this.toggles.tryGet(nodeId);
        if (toggle.result) {
            return toggle;
        }
        
        var gate = this.gates.tryGet(nodeId);
        if (gate.result) {
            return gate;
        }

        return TryGetResponse.failed();
    }

    public connectNodes(outputter: Id, inputter: Id) {
        var outputtingNode = this.tryGetNode(outputter);
        var inputtingNode = this.gates.tryGet(inputter);

        if (!outputtingNode.result || !inputtingNode.result) {
            throw new Error("cannot locate both sides of the connection");
        }

        var edge = new Edge(outputter, inputter);
        this.edges.push(edge);

        if (outputtingNode.item!.isEvaluatable())
        {
            this.simulationQueue.enqueue(outputtingNode.item!);
        }
    }

    public addGate(gate: ILogicGate) {
        this.gates.add(gate.id, gate);
    }

    public simulate()
    {
        while(!this.simulationQueue.isEmpty())
        {
            var node = this.simulationQueue.dequeue();

            var evaluation = node.evaluate()!;

            console.log(`working on ${node.id.Id}:${evaluation}`);

            var edges = this.edges
                .filter(e => e.incomingNodeId.equals(node.id));

            if (edges.length == 0) {
                continue;
            }

            var edge = edges[0];

            var nextNode = this.gates.get(edge.outgoingNodeId);
            edge.setActive(evaluation);

            (nextNode as SingleInputGate).setInput(evaluation);
            this.simulationQueue.enqueue(nextNode);
        }
    }
}