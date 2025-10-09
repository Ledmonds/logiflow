import { Id } from "../../src/common/Id";
import { Dictionary } from "../../src/common/Dictionary";

describe('Dictionary', () => {
    it('throws when adding the same key twice', () => {
        var dict = new Dictionary<Id, string>();
        var key = new Id("abc");      
        dict.add(key, "random input");

        expect(() => dict.add(key, "something else")).toThrow("the key already exists in the dictionary");
    });
    
    it('can retreive added items', () => {
        var dict = new Dictionary<Id, string>();
        var itemId = new Id("abc");
        var itemInput = "hello world";
        dict.add(itemId, itemInput);
        dict.add(new Id("random-id"), "ensure we do not retreive the only item");

        var result = dict.get(itemId);

        expect(result).toBe(itemInput);
    });

    it('can retreive updated items', () => {
        var dict = new Dictionary<Id, string>();
        var itemId = new Id("abc");
        dict.add(itemId, "initial");
        dict.update(itemId, "updated");

        var result = dict.get(itemId);

        expect(result).toBe("updated");
    });

    it('throws when getting non-existent item', () => {
        var dict = new Dictionary<Id, string>();
        var nonExistentId = new Id("i-do-not-exist");
        
        expect(() => dict.get(nonExistentId)).toThrow("no item exists with the given key");
    });
});
