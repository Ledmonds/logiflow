import { SingleInputGate } from "./singleInputGate";

export class NotGate extends SingleInputGate {
  public nodeName: string = "notGate";

  evaluate(): boolean | null {
    return this.isEvaluatable() ? !this.input.isActive() : null;
  }
}
