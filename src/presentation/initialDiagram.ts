import { Diagram } from "../domain/Diagram";
import { NotGate } from "../domain/gates/NotGate";
import { Toggle } from "../domain/gates/Toggle";

var diagram = new Diagram();

var toggle = new Toggle();
var notGate = new NotGate();

diagram.addNode(toggle);
diagram.addNode(notGate);
diagram.connectGates(toggle.output, notGate.input);

export const initialDiagram = diagram;
