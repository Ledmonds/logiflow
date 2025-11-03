import { IEquatiable } from "./IEquatiable";
import { TryGetResponse } from "./TryGetResponse";

export interface IDictionary<TKey extends IEquatiable<TKey>, TItem> {
  asReadOnly(): TItem[];
  add(key: TKey, item: TItem): void;
  get(key: TKey): TItem;
  tryGet(key: TKey): TryGetResponse<TItem>;
  remove(key: TKey): void;
  update(key: TKey, item: TItem): void;
}
