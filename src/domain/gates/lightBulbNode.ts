import { TerminatingNode } from "./terminatingNode";

export class LightBulbNode extends TerminatingNode {
  public nodeName: string = "lightBulbNode";

  public evaluate(): boolean | null {
    return this.isEvaluatable() ? this._input.isActive() : null;
  }
}
