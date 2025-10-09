import { SingleInputGate } from './SingleInputGate';

export class NotGate extends SingleInputGate {
  evaluate = (): boolean =>  !this.input;
}
