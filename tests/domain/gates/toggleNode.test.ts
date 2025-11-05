import { ToggleNode } from "../../../src/domain/gates/toggleNode";

describe("Toggle", () => {
  it("should be active by default", () => {
    var toggle = new ToggleNode(0, 0);

    expect(toggle.evaluate()).toBe(true);
  });

  it("toggling changes the toggles state between active and inactive", () => {
    var toggle = new ToggleNode(0, 0);
    expect(toggle.evaluate()).toBe(true);

    toggle.toggle();
    expect(toggle.evaluate()).toBe(false);

    toggle.toggle();
    expect(toggle.evaluate()).toBe(true);
  });
});
