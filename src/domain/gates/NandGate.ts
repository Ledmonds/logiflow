import { DualInputLogicGate } from "./dualInputLogicGate";

export class NandGate extends DualInputLogicGate {
  public nodeName: string = "nandGate";

  evaluate(): boolean | null {
    return this.isEvaluatable()
      ? !(this._inputA.isActive() && this._inputB.isActive())
      : null;
  }
}
