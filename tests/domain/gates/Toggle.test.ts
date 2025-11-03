import { Toggle } from "../../../src/domain/gates/toggle";

describe("Toggle", () => {
  it("should be active by default", () => {
    var toggle = new Toggle();

    expect(toggle.evaluate()).toBe(true);
  });

  it("toggling changes the toggles state between active and inactive", () => {
    var toggle = new Toggle();
    expect(toggle.evaluate()).toBe(true);

    toggle.toggle();
    expect(toggle.evaluate()).toBe(false);

    toggle.toggle();
    expect(toggle.evaluate()).toBe(true);
  });
});
