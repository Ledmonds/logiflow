import { XorGate } from "../../../src/domain/gates/xorGate";

describe("XorGate logically XORs inputs", () => {
  test.each([
    [false, false, false],
    [false, true, true],
    [true, false, true],
    [true, true, false],
    [null, false, null],
    [false, null, null],
    [null, true, null],
    [true, null, null],
  ])("evaluate(%s, %s) should return %s", (inputA, inputB, expected) => {
    const gate = new XorGate(0, 0);
    gate.setInput(gate.inputs[0].id, inputA);
    gate.setInput(gate.inputs[1].id, inputB);

    expect(gate.evaluate()).toBe(expected);
  });
});
