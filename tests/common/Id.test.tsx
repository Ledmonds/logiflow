import { ConnectorId } from "../../src/common/ids/ConnectorId";

describe('Id', () => {
    it('throws an error if initialized with an empty string', () => {
        expect(() => new ConnectorId('')).toThrow("Id cannot be empty");
    });
});
