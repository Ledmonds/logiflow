import { LightBulbNode } from "../../../src/domain/gates/lightBulbNode";

describe("lightBulbNode", () => {
  test.each([
    [false, false],
    [true, true],
    [null, null],
  ])("evaluate(%s) returns %s (mirrors its input)", (input, expected) => {
    const gate = new LightBulbNode(0, 0);
    gate.setInput(gate.inputs[0].id, input);

    expect(gate.evaluate()).toBe(expected);
  });
});
