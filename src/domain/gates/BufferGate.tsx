import { SingleInputGate } from './SingleInputGate';

export class BufferGate extends SingleInputGate {
  evaluate(): boolean | null {
    return this.input == null
      ? null
      : this.input;
  }
}
