import { Diagram } from "../domain/diagram";
import { NotGate } from "../domain/gates/notGate";
import { Toggle } from "../domain/gates/toggle";

var diagram = new Diagram();

var toggle = new Toggle();
var notGate = new NotGate();

diagram.addNode(toggle);
diagram.addNode(notGate);
diagram.connectGates(toggle.output, notGate.input);

export const initialDiagram = diagram;
