import { Id } from "../../../src/common/ids/Id";

export class TestId extends Id {}

describe('Id', () => {
    it('throws an error if initialized with an empty string', () => {
        expect(() => new TestId('')).toThrow("Id cannot be empty");
    });
});
