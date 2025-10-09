import { Toggle } from "../../../src/domain/gates/Toggle";

describe('Toggle', () => {
    it('should be active by default', () => {
        var toggle = new Toggle();

        expect(toggle.isActive()).toBe(true);
    });

    it('toggling changes the toggles state between active and inactive', () => {
        var toggle = new Toggle();
        expect(toggle.isActive()).toBe(true);

        toggle.toggle();
        expect(toggle.isActive()).toBe(false);

        toggle.toggle();
        expect(toggle.isActive()).toBe(true);
    });
});