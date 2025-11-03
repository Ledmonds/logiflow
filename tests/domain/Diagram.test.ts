import { Diagram } from "../../src/domain/diagram";
import { AndGate } from "../../src/domain/gates/andGate";
import { BufferGate } from "../../src/domain/gates/bufferGate";
import { NotGate } from "../../src/domain/gates/notGate";
import { Toggle } from "../../src/domain/gates/toggle";

describe("Diagram", () => {
  it("simple toggle test", () => {
    var diagram = new Diagram();

    var toggle = new Toggle(0, 0);

    diagram.addNode(toggle);
    diagram.simulate();

    expect(toggle.evaluate()).toBe(true);
  });

  it("simple not toggle test", () => {
    var diagram = new Diagram();

    var toggle = new Toggle(0, 0);
    var notGate = new NotGate(0, 0);

    diagram.addNode(toggle);
    diagram.addNode(notGate);

    diagram.connectGates(toggle.output, notGate.input);

    diagram.simulate();

    expect(toggle.evaluate()).toBe(true);
  });

  it("toggle, buffer, not, not", () => {
    var diagram = new Diagram();

    var toggle = new Toggle(0, 0);
    var buffer = new BufferGate(0, 0);
    var firstNotGate = new NotGate(0, 0);
    var secondNotGate = new NotGate(0, 0);

    diagram.addNode(toggle);
    diagram.addNode(buffer);
    diagram.addNode(firstNotGate);
    diagram.addNode(secondNotGate);

    diagram.connectGates(toggle.output, buffer.input);
    diagram.connectGates(buffer.output, firstNotGate.input);
    diagram.connectGates(firstNotGate.output, secondNotGate.input);

    diagram.simulate();

    expect(toggle.evaluate()).toBe(true);
    expect(buffer.evaluate()).toBe(true);
    expect(firstNotGate.evaluate()).toBe(false);
    expect(secondNotGate.evaluate()).toBe(true);
  });

  it("toggle, toggle, and", () => {
    var diagram = new Diagram();

    var toggleA = new Toggle(0, 0);
    var toggleB = new Toggle(0, 0);
    var and = new AndGate(0, 0);

    diagram.addNode(toggleA);
    diagram.addNode(toggleB);
    diagram.addNode(and);

    diagram.connectGates(toggleA.output, and.inputA);
    diagram.connectGates(toggleB.output, and.inputB);

    diagram.simulate();

    expect(toggleA.evaluate()).toBe(true);
    expect(toggleB.evaluate()).toBe(true);
    expect(and.evaluate()).toBe(true);
  });
});
