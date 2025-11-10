import { DualInputLogicGate } from "./dualInputLogicGate";

export class OrGate extends DualInputLogicGate {
  public nodeName: string = "orGate";

  evaluate(): boolean | null {
    return this.isEvaluatable()
      ? this._inputA.isActive() || this._inputB.isActive()
      : null;
  }
}
