import { Queue } from "../../src/common/queue";

describe("Queue", () => {
  it("enqueue adds an item to the queue", () => {
    var queue = new Queue<string>();
    var value = "some input";

    expect(queue.isEmpty()).toBe(true);
    expect(queue.length()).toBe(0);
    queue.enqueue(value);

    expect(queue.peek()).toBe(value);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.length()).toBe(1);
  });

  it("dequeue throws when there are no items in the queue", () => {
    var queue = new Queue<string>();

    expect(() => queue.dequeue()).toThrow("no elements in the queue");
  });

  it("dequeue pops the leading item in the queue", () => {
    var queue = new Queue<string>();
    var first = "first";
    var second = "second";

    queue.enqueue(first);
    queue.enqueue(second);

    var result = queue.dequeue();

    expect(result).toBe(first);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.length()).toBe(1);
    expect(queue.peek()).toBe(second);
  });

  it("peek throws when there are no items in the queue", () => {
    var queue = new Queue<string>();

    expect(() => queue.peek()).toThrow("no elements in the queue");
  });
});
