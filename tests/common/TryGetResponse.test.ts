import { TryGetResponse } from "../../src/common/tryGetResponse";

describe("TryGetResponse", () => {
  it("is false on failed", () => {
    var response = TryGetResponse.failed<number>();
    expect(response.result).toBe(false);
  });

  it("is true on success", () => {
    var response = TryGetResponse.success<number>(123);
    expect(response.result).toBe(true);
    expect(response.item).toBe(123);
  });
});
