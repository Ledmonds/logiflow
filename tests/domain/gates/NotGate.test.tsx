import { NotGate } from "../../../src/domain/gates/NotGate";

describe('NotGate inverts input', () => {
  test.each([
    [true, false],
    [false, true],
    [null, null]
  ])('evaluate(%s) should return %s', (input, expected) => {
    const gate = new NotGate();
    gate.setInput(input);

    expect(gate.evaluate()).toBe(expected);
  });
});
