import { Id } from "../../src/common/Id";

describe('Id', () => {
    it('throws an error if initialized with an empty string', () => {
        expect(() => new Id('')).toThrow("Id cannot be empty");
    });
});
