import { Diagram } from "../domain/diagram";
import { AndGate } from "../domain/gates/andGate";
import { LightBulbNode } from "../domain/gates/lightBulbNode";
import { NotGate } from "../domain/gates/notGate";
import { ToggleNode } from "../domain/gates/toggleNode";

var diagram = new Diagram();

var toggleA = new ToggleNode(0, 0);
var toggleB = new ToggleNode(0, 100);
var notGateA = new NotGate(100, 0);
var notGateB = new NotGate(200, 0);
var andGate = new AndGate(300, 0);
var lightBulbNode = new LightBulbNode(400, 0);

diagram.addNode(toggleA);
diagram.addNode(toggleB);
diagram.addNode(notGateA);
diagram.addNode(notGateB);
diagram.addNode(andGate);
diagram.addNode(lightBulbNode);

diagram.connectGates(toggleA.output, notGateA.inputs[0]);
diagram.connectGates(notGateA.output, notGateB.inputs[0]);
diagram.connectGates(notGateB.output, andGate.inputs[0]);
diagram.connectGates(toggleB.output, andGate.inputs[1]);
diagram.connectGates(andGate.output, lightBulbNode.inputs[0]);

console.log(diagram);

export const initialDiagram = diagram;
