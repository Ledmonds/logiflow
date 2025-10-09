import { CreateId } from "../../../src/common/services/IdFactory";

describe('IdFactory', () => {
    it('should create a non-empty Id', () => {
        const id = CreateId();

        expect(id).toBeDefined();
        expect(id).not.toBe("");
    });
});
