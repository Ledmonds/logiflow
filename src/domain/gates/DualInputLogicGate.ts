import { Connector } from "../connector";
import { LogicGate } from "./logicGate";

export abstract class DualInputLogicGate extends LogicGate {
  protected readonly _inputA = new Connector();
  protected readonly _inputB = new Connector();
  inputs: Connector[];

  constructor(x: number, y: number) {
    super(x, y);

    this.inputs = [this._inputA, this._inputB];
  }
}
