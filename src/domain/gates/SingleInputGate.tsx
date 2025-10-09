import { CreateId } from '../../common/services/IdFactory';
import { Id } from '../../common/Id';
import { ILogicGate } from './ILogicGate';

export abstract class SingleInputGate implements ILogicGate {
    readonly id: Id = CreateId();
    protected input: boolean | null = null;
    
    abstract evaluate(): boolean | null;
    
    setInput(value: boolean | null) {
        this.input = value;
    }

    isEvaluatable(): boolean {
        return this.input != null;
    }
}
