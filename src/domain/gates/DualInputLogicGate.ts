import { Connector } from "../connector";
import { LogicGate } from "./logicGate";

export abstract class DualInputLogicGate extends LogicGate {
  protected readonly _inputA = new Connector();
  protected readonly _inputB = new Connector();
  public readonly inputs: Connector[] = [this._inputA, this._inputB];

  public constructor(x: number, y: number) {
    super(x, y);
  }
}
