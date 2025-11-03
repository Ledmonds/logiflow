import { Diagram } from "../../src/domain/Diagram";
import { AndGate } from "../../src/domain/gates/AndGate";
import { BufferGate } from "../../src/domain/gates/BufferGate";
import { NotGate } from "../../src/domain/gates/NotGate";
import { Toggle } from "../../src/domain/gates/Toggle";

describe("Diagram", () => {
  it("simple toggle test", () => {
    var diagram = new Diagram();

    var toggle = new Toggle();

    diagram.addNode(toggle);
    diagram.simulate();

    expect(toggle.evaluate()).toBe(true);
  });

  it("simple not toggle test", () => {
    var diagram = new Diagram();

    var toggle = new Toggle();
    var notGate = new NotGate();

    diagram.addNode(toggle);
    diagram.addNode(notGate);

    diagram.connectGates(toggle.output, notGate.input);

    diagram.simulate();

    expect(toggle.evaluate()).toBe(true);
  });

  it("toggle, buffer, not, not", () => {
    var diagram = new Diagram();

    var toggle = new Toggle();
    var buffer = new BufferGate();
    var firstNotGate = new NotGate();
    var secondNotGate = new NotGate();

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

    var toggleA = new Toggle();
    var toggleB = new Toggle();
    var and = new AndGate();

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
