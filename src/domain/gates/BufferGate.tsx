import { SingleInputGate } from './SingleInputGate';

export class BufferGate extends SingleInputGate {
  evaluate = (): boolean =>  this.input;
}
