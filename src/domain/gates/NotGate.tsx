import { SingleInputGate } from './SingleInputGate';

export class NotGate extends SingleInputGate {
  evaluate(): boolean | null {
    return this.isEvaluatable()
      ? !this.input.isActive()
      : null;
  }
}
