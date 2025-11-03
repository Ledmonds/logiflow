import { SingleInputLogicGate } from "./singleInputLogicGate";

export class NotGate extends SingleInputLogicGate {
  public nodeName: string = "notGate";

  evaluate(): boolean | null {
    return this.isEvaluatable() ? !this._input.isActive() : null;
  }
}
