import { CreateId } from '../../common/services/IdFactory';
import { Id } from '../../common/Id';
import { ILogicGate } from './ILogicGate';

export abstract class DualInputLogicGate implements ILogicGate {
    readonly id: Id = CreateId();
    protected inputA: boolean | null = null;
    protected inputB: boolean | null = null;
    
    abstract evaluate(): boolean | null;

    setInputA(value: boolean | null) {
        this.inputA = value;
    }
    setInputB(value: boolean | null) {
        this.inputB = value;
    }

    isEvaluatable(): boolean {
        return this.inputA != null && this.inputB != null;
    }
}
