import { DualInputLogicGate } from "./DualInputLogicGate";

export class NandGate extends DualInputLogicGate {
  public nodeName: string = "nandGate";

  evaluate(): boolean | null {
    return this.isEvaluatable()
      ? !(this.inputA.isActive() && this.inputB.isActive())
      : null;
  }
}
