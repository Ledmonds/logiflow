import { IEquatiable } from "./equatiable.interface";
import { TryGetResponse } from "./tryGetResponse";

export interface IDictionary<TKey extends IEquatiable<TKey>, TItem> {
  asReadOnly(): TItem[];
  add(key: TKey, item: TItem): void;
  get(key: TKey): TItem;
  tryGet(key: TKey): TryGetResponse<TItem>;
  remove(key: TKey): void;
  update(key: TKey, item: TItem): void;
}
