import { CreateId } from '../services/IdFactory';
import { Id } from '../../common/Id';
import { ILogicGate } from './ILogicGate';

export abstract class SingleInputGate implements ILogicGate {
    readonly Id: Id = CreateId();
    protected input: boolean = false;

    abstract evaluate: () => boolean;

    setInput(value: boolean) {
        this.input = value;
    }
}
