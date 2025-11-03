import { IEquatiable } from "./equatiable.interface";

export interface IReadOnlyDictionary<TKey extends IEquatiable<TKey>, TItem> {
  get(key: TKey): TItem;
}
