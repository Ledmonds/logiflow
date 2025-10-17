import { IQueue } from "./IQueue";

export class Queue<TItem> implements IQueue<TItem> {
    private queue: TItem[] = [];
    public length: number = this.queue.length;

    public enqueue(item: TItem): void {
        this.queue.push(item);
    }

    public dequeue(): TItem {
        var head = this.queue.shift();

        if (head == undefined) {
            throw new Error("no elements in the queue");
        }

        return head;
    }

    public peek(): TItem {
        if (this.isEmpty()) {
            throw new Error("no elements in the queue");
        }

        return this.queue[0];
    }

    public isEmpty(): boolean {
        return this.queue.length == 0;
    }
}
