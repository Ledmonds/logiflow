import { Id } from "../../common/Id";
import { CreateId } from "../../common/services/IdFactory";
import { INode } from "./INode";

export class Toggle implements INode {
    readonly id: Id = CreateId();
    private active: boolean = true;
    
    isActive = () => this.active;
    
    toggle(): void {
        this.active = !this.active;
    }
    
    isEvaluatable(): boolean {
        return true;
    }
    
    evaluate = () => true;
}
