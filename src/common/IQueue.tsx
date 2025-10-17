export interface IQueue<TItem>
{
    enqueue(item: TItem): void;
    dequeue(): TItem;
    peek(): TItem;
    isEmpty(): boolean;
    length: number;
}
