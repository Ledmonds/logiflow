import { Connector } from "../connector";
import { LogicGate } from "./logicGate";

export abstract class SingleInputLogicGate extends LogicGate {
  protected readonly _input = new Connector();
  public readonly inputs: Connector[] = [this._input];

  public constructor(x: number, y: number) {
    super(x, y);
  }
}
