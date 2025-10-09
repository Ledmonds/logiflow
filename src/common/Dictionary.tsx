import { IDictionary } from "./IDictionary";
import { IEquatiable } from "./IEquatiable";
import { IReadOnlyDictionary } from "./IReadOnlyDictionary";

export class Dictionary<TKey extends IEquatiable<TKey>, TItem>
    implements IDictionary<TKey, TItem>,
    IReadOnlyDictionary<TKey, TItem>
{
    private map: Map<string, TItem> = new Map();

    public add(key: TKey, item: TItem): void
    {
        var hash = key.hash();
        if (this.map.get(hash) != undefined)
        {
            throw new Error("the key already exists in the dictionary");
        }

        this.map.set(hash, item);
    }

    public get(key: TKey): TItem {
        var item = this.map.get(key.hash());

        if (item == null || item == undefined)
        {
            throw new Error("no item exists with the given key");
        }

        return item;
    }

    public remove(key: TKey): void {
        this.map.delete(key.hash());
    }

    public update(key: TKey, item: TItem): void
    {
        this.map.set(key.hash(), item);
    }
}
