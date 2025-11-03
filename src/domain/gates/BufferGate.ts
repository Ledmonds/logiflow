import { SingleInputLogicGate } from "./singleInputLogicGate";

export class BufferGate extends SingleInputLogicGate {
  public nodeName: string = "bufferGate";

  evaluate(): boolean | null {
    return this.isEvaluatable() ? this._input.isActive() : null;
  }
}
