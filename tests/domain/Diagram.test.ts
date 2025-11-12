import { Diagram } from "../../src/domain/diagram";
import { AndGate } from "../../src/domain/gates/andGate";
import { BufferGate } from "../../src/domain/gates/bufferGate";
import { LightBulbNode } from "../../src/domain/gates/lightBulbNode";
import { NotGate } from "../../src/domain/gates/notGate";
import { ToggleNode } from "../../src/domain/gates/toggleNode";

describe("Diagram", () => {
  it("a toggle with multiple connected outgoing edges all have the same state", () => {
    var diagram = new Diagram();

    var toggle = new ToggleNode(0, 0);
    var andGate = new AndGate(0, 0);

    diagram.addNode(toggle);
    diagram.addNode(andGate);
    diagram.connectGates(toggle.output, andGate.inputs[0]);
    diagram.connectGates(toggle.output, andGate.inputs[1]);

    expect(andGate.evaluate()).toBe(true);
  });

  it("toggle changes the toggles state", () => {
    var diagram = new Diagram();

    var toggle = new ToggleNode(0, 0);

    diagram.addNode(toggle);
    diagram.toggle(toggle.id);

    expect(toggle.evaluate()).toBe(false);
  });

  it("simple toggle test", () => {
    var diagram = new Diagram();

    var toggle = new ToggleNode(0, 0);

    diagram.addNode(toggle);

    expect(toggle.evaluate()).toBe(true);
  });

  it("toggle, lightBulb", () => {
    var diagram = new Diagram();

    var toggle = new ToggleNode(0, 0);
    var lightBulb = new LightBulbNode(0, 0);

    diagram.addNode(toggle);
    diagram.addNode(lightBulb);
    diagram.connectGates(toggle.output, lightBulb.inputs[0]);

    expect(toggle.evaluate()).toBe(true);
    expect(lightBulb.evaluate()).toBe(true);
  });

  it("simple not toggle test", () => {
    var diagram = new Diagram();

    var toggle = new ToggleNode(0, 0);
    var notGate = new NotGate(0, 0);

    diagram.addNode(toggle);
    diagram.addNode(notGate);

    diagram.connectGates(toggle.output, notGate.inputs[0]);

    expect(toggle.evaluate()).toBe(true);
  });

  it("toggle, buffer, not, not", () => {
    var diagram = new Diagram();

    var toggle = new ToggleNode(0, 0);
    var buffer = new BufferGate(0, 0);
    var firstNotGate = new NotGate(0, 0);
    var secondNotGate = new NotGate(0, 0);

    diagram.addNode(toggle);
    diagram.addNode(buffer);
    diagram.addNode(firstNotGate);
    diagram.addNode(secondNotGate);

    diagram.connectGates(toggle.output, buffer.inputs[0]);
    diagram.connectGates(buffer.output, firstNotGate.inputs[0]);
    diagram.connectGates(firstNotGate.output, secondNotGate.inputs[0]);

    expect(toggle.evaluate()).toBe(true);
    expect(buffer.evaluate()).toBe(true);
    expect(firstNotGate.evaluate()).toBe(false);
    expect(secondNotGate.evaluate()).toBe(true);
  });

  it("toggle, toggle, and", () => {
    var diagram = new Diagram();

    var toggleA = new ToggleNode(0, 0);
    var toggleB = new ToggleNode(0, 0);
    var and = new AndGate(0, 0);

    diagram.addNode(toggleA);
    diagram.addNode(toggleB);
    diagram.addNode(and);

    diagram.connectGates(toggleA.output, and.inputs[0]);
    diagram.connectGates(toggleB.output, and.inputs[1]);

    expect(toggleA.evaluate()).toBe(true);
    expect(toggleB.evaluate()).toBe(true);
    expect(and.evaluate()).toBe(true);
  });
});
