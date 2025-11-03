import { Dictionary } from "../../src/common/dictionary";
import { TestId } from "./ids/id.test";

describe("Dictionary", () => {
  it("throws when adding the same key twice", () => {
    var dict = new Dictionary<TestId, string>();
    var key = new TestId("abc");
    dict.add(key, "random input");

    expect(() => dict.add(key, "something else")).toThrow(
      "the key already exists in the dictionary"
    );
  });

  it("can retreive added items", () => {
    var dict = new Dictionary<TestId, string>();
    var itemId = new TestId("abc");
    var itemInput = "hello world";
    dict.add(itemId, itemInput);
    dict.add(
      new TestId("random-id"),
      "ensure we do not retreive the only item"
    );

    var result = dict.get(itemId);

    expect(result).toBe(itemInput);
  });

  it("can retreive updated items", () => {
    var dict = new Dictionary<TestId, string>();
    var itemId = new TestId("abc");
    dict.add(itemId, "initial");
    dict.update(itemId, "updated");

    var result = dict.get(itemId);

    expect(result).toBe("updated");
  });

  it("throws when getting non-existent item", () => {
    var dict = new Dictionary<TestId, string>();
    var nonExistentId = new TestId("i-do-not-exist");

    expect(() => dict.get(nonExistentId)).toThrow(
      "no item exists with the given key"
    );
  });
});
