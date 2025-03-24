# Circular Queue Implementation in JavaScript

A **Circular Queue** is a linear data structure that follows the **FIFO (First In First Out)** principle but with a circular behavior. Unlike a normal queue, where elements shift forward on `dequeue()`, a circular queue reuses empty spaces at the front.

## Why Use a Circular Queue?
A standard queue requires shifting elements forward when an item is removed, which is inefficient. The circular queue overcomes this limitation by treating the array as a circular buffer, ensuring constant-time operations for insertion and deletion.

## Features of Circular Queue:
1. **Efficient Memory Utilization** - Reuses empty spaces.
2. **Fixed Size** - Operates within a pre-defined capacity.
3. **Wrap Around** - When reaching the end of the queue, it wraps back to the beginning.
4. **Maintains Order** - Preserves the sequence of elements inserted.
5. **Constant Time Complexity** - Both `enqueue()` and `dequeue()` operations work in **O(1)** time complexity.

## Applications of Circular Queue:
- **CPU Scheduling** - Used in round-robin scheduling algorithms.
- **Memory Management** - Helps in managing buffers efficiently.
- **Traffic Systems** - Circular queues are used in managing incoming and outgoing traffic data.
- **Data Streaming** - Used in applications like media players to handle continuous data streams.

## Methods:
- `enqueue(element)`: Adds an element to the queue.
- `dequeue()`: Removes an element from the front.
- `isFull()`: Checks if the queue is full.
- `isEmpty()`: Checks if the queue is empty.
- `peek()`: Gets the front element without removing it.
- `print()`: Displays the queue elements.

## JavaScript Implementation:
```javascript
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;  // Clear the dequeued element
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      let i = this.front;
      let str = "";
      do {
        str += this.items[i] + " ";
        i = (i + 1) % this.capacity;
      } while (i !== (this.rear + 1) % this.capacity);
      console.log(str.trim());
    }
  }
}

// Test the CircularQueue
const queue = new CircularQueue(5);
console.log(queue.isEmpty()); // true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.isFull()); // true
queue.print(); // 10 20 30 40 50
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
queue.print(); // 20 30 40 50
queue.enqueue(60); // Adds 60 in place of dequeued element (10)
queue.print(); // 20 30 40 50 60
```
