import { NandGate } from "../../../src/domain/gates/nandGate";

describe("NandGate logically NANDs inputs", () => {
  test.each([
    [false, false, true],
    [false, true, true],
    [true, false, true],
    [true, true, false],
    [null, false, null],
    [false, null, null],
    [null, true, null],
    [true, null, null],
  ])("evaluate(%s) should return %s", (inputA, inputB, expected) => {
    const gate = new NandGate(0, 0);
    gate.setInput(gate.inputA.id, inputA);
    gate.setInput(gate.inputB.id, inputB);

    expect(gate.evaluate()).toBe(expected);
  });
});
