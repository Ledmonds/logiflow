import { DualInputLogicGate } from "./DualInputLogicGate";

export class AndGate extends DualInputLogicGate {
  public nodeName: string = "andGate";

  evaluate(): boolean | null {
    return this.isEvaluatable()
      ? this.inputA.isActive() && this.inputB.isActive()
      : null;
  }
}
