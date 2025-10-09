export interface IQueue<TItem>
{
    enqueue(item: TItem): void;
    dequeue(): TItem;
    peek(): TItem | null;
    isEmpty(): boolean;
}

;