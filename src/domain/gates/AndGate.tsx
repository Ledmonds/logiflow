import { DualInputLogicGate } from './DualInputLogicGate';

export class AndGate extends DualInputLogicGate {
  evaluate = (): boolean =>  this.inputA && this.inputB;
}
   