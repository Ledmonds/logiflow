import { EdgeId } from "../../../src/common/ids/edgeId";
import { CreateId } from "../../../src/common/services/idFactory";

describe("IdFactory", () => {
  it("should create a non-empty Id", () => {
    const id = CreateId(EdgeId);

    expect(id).toBeDefined();
    expect(id).not.toBe("");
  });
});
