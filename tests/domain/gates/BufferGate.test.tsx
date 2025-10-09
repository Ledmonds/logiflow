import { BufferGate } from "../../../src/domain/gates/BufferGate";

describe('BufferGate forwards input', () => {
  test.each([
    [true, true],
    [false, false],
  ])('evaluate(%s) should return %s', (input, expected) => {
    const gate = new BufferGate();
    gate.setInput(input);

    expect(gate.evaluate()).toBe(expected);
  });
});
