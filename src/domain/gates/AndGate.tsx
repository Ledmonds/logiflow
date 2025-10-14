import { DualInputLogicGate } from './DualInputLogicGate';

export class AndGate extends DualInputLogicGate {
  evaluate(): boolean | null {
    return this.isEvaluatable()
      ? this.inputA.isActive() && this.inputB.isActive()
      : null;
  }
}
