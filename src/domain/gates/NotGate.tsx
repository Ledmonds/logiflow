import { SingleInputGate } from "./SingleInputGate";

export class NotGate extends SingleInputGate {
  public nodeName: string = "notGate";

  evaluate(): boolean | null {
    return this.isEvaluatable() ? !this.input.isActive() : null;
  }
}
