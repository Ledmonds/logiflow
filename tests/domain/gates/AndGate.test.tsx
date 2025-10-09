import { AndGate } from "../../../src/domain/gates/AndGate";

describe('AndGate logically ANDs inputs', () => {
  test.each([
    [false, false, false],
    [false, true, false],
    [true, false, false],
    [true, true, true],
    
  ])('evaluate(%s) should return %s', (inputA, inputB, expected) => {
    const gate = new AndGate();
    gate.setInputA(inputA);
    gate.setInputB(inputB);

    expect(gate.evaluate()).toBe(expected);
  });
});
