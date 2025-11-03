import { Diagram } from "../domain/diagram";
import { AndGate } from "../domain/gates/andGate";
import { NotGate } from "../domain/gates/notGate";
import { Toggle } from "../domain/gates/toggle";

var diagram = new Diagram();

var toggleA = new Toggle(0, 0);
var toggleB = new Toggle(0, 100);
var notGate = new NotGate(100, 0);
var andGate = new AndGate(200, 0);

diagram.addNode(toggleA);
diagram.addNode(toggleB);
diagram.addNode(notGate);
diagram.addNode(andGate);

diagram.connectGates(toggleA.output, notGate.inputs[0]);
diagram.connectGates(notGate.output, andGate.inputs[0]);
diagram.connectGates(toggleB.output, andGate.inputs[1]);

export const initialDiagram = diagram;
