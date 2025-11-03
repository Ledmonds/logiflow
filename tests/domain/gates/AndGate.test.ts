import { AndGate } from "../../../src/domain/gates/andGate";

describe("AndGate logically ANDs inputs", () => {
  test.each([
    [false, false, false],
    [false, true, false],
    [true, false, false],
    [true, true, true],
    [null, false, null],
    [false, null, null],
    [null, true, null],
    [true, null, null],
  ])("evaluate(%s) should return %s", (inputA, inputB, expected) => {
    const gate = new AndGate();
    gate.setInput(gate.inputA.id, inputA);
    gate.setInput(gate.inputB.id, inputB);

    expect(gate.evaluate()).toBe(expected);
  });
});
