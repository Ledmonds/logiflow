import { Connector } from "../../src/domain/Connector";

describe('Connector', () => {
    it('returns false when not set after initialisation', () => {
        var connector = new Connector();
        
        expect(connector.isSet()).toBe(false);
    });

    test.each([
        [true, true],
        [false, true],
        [null, false]
      ])('setActive(%s) returns true after isSet()', (input, expected) => {
        var connector = new Connector();
        connector.setActive(input);
        
        expect(connector.isSet()).toBe(expected);
    });

    test.each([
        [true, true],
        [false, false],
        [null, null]
      ])('active returns set value', (input, expected) => {
        var connector = new Connector();
        connector.setActive(input);
        
        expect(connector.isActive()).toBe(expected);
    });
});
