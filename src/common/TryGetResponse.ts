export class TryGetResponse<TItem> {
    public result: boolean;
    public item: TItem | null;

    constructor(_result: boolean, _item: TItem | null) {
        this.result = _result;
        this.item = _item;
    }

    public static failed<TItem>() : TryGetResponse<TItem> {
        return new TryGetResponse<TItem>(false, null);
    }

    public static success<TItem>(item: TItem): TryGetResponse<TItem> {
        return new TryGetResponse<TItem>(true, item);
    }
}
