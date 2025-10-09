import { SingleInputGate } from './SingleInputGate';

export class NotGate extends SingleInputGate {
  evaluate(): boolean | null {
    return this.input == null
      ? null
      : !this.input;
  }
}
