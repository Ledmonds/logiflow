import { DualInputLogicGate } from './DualInputLogicGate';

export class AndGate extends DualInputLogicGate {
  evaluate(): boolean | null {
    if (this.inputA == null || this.inputB == null)
    {
      return null;
    }

    return this.inputA && this.inputB;
  }
}
