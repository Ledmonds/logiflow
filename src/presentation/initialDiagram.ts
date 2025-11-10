import { Diagram } from "../domain/diagram";
import { AndGate } from "../domain/gates/andGate";
import { OrGate } from "../domain/gates/orGate";
import { XorGate } from "../domain/gates/xorGate";
import { LightBulbNode } from "../domain/gates/lightBulbNode";
import { ToggleNode } from "../domain/gates/toggleNode";

var diagram = new Diagram();

// INPUTS
var toggleA = new ToggleNode(0, 0);
var toggleB = new ToggleNode(0, 100);
var toggleCin = new ToggleNode(0, 200);

// INTERNAL GATES
var xor1 = new XorGate(150, 50); // XOR for A ⊕ B
var and1 = new AndGate(150, 150); // AND for A • B
var xor2 = new XorGate(300, 75); // XOR for (A ⊕ B) ⊕ Cin → Sum
var and2 = new AndGate(300, 175); // AND for Cin • (A ⊕ B)
var or1 = new OrGate(450, 150); // OR for carry-out

// OUTPUTS
var sumLight = new LightBulbNode(500, 50); // Sum output
var coutLight = new LightBulbNode(600, 150); // Carry output

// ADD NODES
diagram.addNode(toggleA);
diagram.addNode(toggleB);
diagram.addNode(toggleCin);
diagram.addNode(xor1);
diagram.addNode(and1);
diagram.addNode(xor2);
diagram.addNode(and2);
diagram.addNode(or1);
diagram.addNode(sumLight);
diagram.addNode(coutLight);

// CONNECTIONS
// First layer: A and B into XOR1 and AND1
diagram.connectGates(toggleA.output, xor1.inputs[0]);
diagram.connectGates(toggleB.output, xor1.inputs[1]);

diagram.connectGates(toggleA.output, and1.inputs[0]);
diagram.connectGates(toggleB.output, and1.inputs[1]);

// Second layer: XOR1 output + Cin into XOR2 and AND2
diagram.connectGates(xor1.output, xor2.inputs[0]);
diagram.connectGates(toggleCin.output, xor2.inputs[1]);

diagram.connectGates(toggleCin.output, and2.inputs[0]);
diagram.connectGates(xor1.output, and2.inputs[1]);

// Third layer: Carry outputs combined in OR1
diagram.connectGates(and1.output, or1.inputs[0]);
diagram.connectGates(and2.output, or1.inputs[1]);

// Outputs: SUM and CARRY lights
diagram.connectGates(xor2.output, sumLight.inputs[0]);
diagram.connectGates(or1.output, coutLight.inputs[0]);

export const initialDiagram = diagram;
