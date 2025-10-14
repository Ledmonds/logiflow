import { NodeId } from "../../common/ids/LogicGateId";
import { CreateId } from "../../common/services/IdFactory";
import { Connector } from "./Connector";
import { INode } from "./INode";

export class Toggle implements INode {
    kind: string = Toggle.kind;
    public static kind: string = "toggle";
    private active: boolean = true;
    public readonly id: NodeId = CreateId(NodeId);
    public readonly output: Connector = new Connector();
    
    toggle(): void {
        this.active = !this.active;
    }
    
    isEvaluatable = () => true;
    evaluate = () => this.active;
}
