import { IEquatiable } from "./IEquatiable";

export interface IDictionary<TKey extends IEquatiable<TKey>, TItem>
{
    add(key: TKey, item: TItem): void;
    get(key: TKey): TItem;
    remove(key: TKey): void;
    update(key: TKey, item: TItem): void;
}
