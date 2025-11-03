import { IEquatiable } from "./IEquatiable";

export interface IReadOnlyDictionary<TKey extends IEquatiable<TKey>, TItem>
{
    get(key: TKey): TItem;
}
