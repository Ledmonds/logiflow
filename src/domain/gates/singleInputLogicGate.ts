import { Connector } from "../connector";
import { LogicGate } from "./logicGate";

export abstract class SingleInputLogicGate extends LogicGate {
  protected readonly _input = new Connector();
  inputs: Connector[];

  constructor(x: number, y: number) {
    super(x, y);

    this.inputs = [this._input];
  }
}
