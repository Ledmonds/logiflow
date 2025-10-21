import { SingleInputGate } from "./SingleInputGate";

export class BufferGate extends SingleInputGate {
  public nodeName: string = "bufferGate";

  evaluate(): boolean | null {
    return this.isEvaluatable() ? this.input.isActive() : null;
  }
}
