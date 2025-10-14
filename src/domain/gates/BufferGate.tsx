import { SingleInputGate } from './SingleInputGate';

export class BufferGate extends SingleInputGate {
  evaluate(): boolean | null {
    return this.isEvaluatable()
      ? this.input.isActive()
      : null;
  }
}
