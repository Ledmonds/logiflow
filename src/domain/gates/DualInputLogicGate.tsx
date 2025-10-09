import { CreateId } from '../services/IdFactory';
import { Id } from '../../common/Id';
import { ILogicGate } from './ILogicGate';

export abstract class DualInputLogicGate implements ILogicGate {
    readonly Id: Id = CreateId();
    protected inputA: boolean = false;
    protected inputB: boolean = false;
    
    abstract evaluate: () => boolean;

    setInputA(value: boolean) {
        this.inputA = value;
    }
    setInputB(value: boolean) {
        this.inputB = value;
    }
}
