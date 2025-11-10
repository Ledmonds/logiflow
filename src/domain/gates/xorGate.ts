import { DualInputLogicGate } from "./dualInputLogicGate";

export class XorGate extends DualInputLogicGate {
  public nodeName: string = "xorGate";

  evaluate(): boolean | null {
    if (this._inputA.isActive() && this._inputB.isActive()) {
      return false;
    }

    return this.isEvaluatable()
      ? this._inputA.isActive() || this._inputB.isActive()
      : null;
  }
}
