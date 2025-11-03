import { NotGate } from "../../../src/domain/gates/notGate";

describe("NotGate inverts input", () => {
  test.each([
    [true, false],
    [false, true],
    [null, null],
  ])("evaluate(%s) should return %s", (input, expected) => {
    const gate = new NotGate(0, 0);
    gate.setInput(input);

    expect(gate.evaluate()).toBe(expected);
  });
});
