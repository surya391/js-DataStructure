# Queue Implementations in JavaScript

## Introduction to Queue Data Structure

A **Queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. This means that the element added first is the one that gets removed first. It is similar to a queue of people waiting in line, where the first person in line is served first.

### Key Operations in a Queue:
1. **Enqueue**: Adds an element to the end of the queue.
2. **Dequeue**: Removes an element from the front of the queue.
3. **Peek**: Retrieves the front element without removing it.
4. **isEmpty**: Checks if the queue is empty.
5. **Size**: Returns the number of elements in the queue.

Queues are commonly used in scheduling tasks, handling requests in web servers, breadth-first search (BFS) in graphs, and more.

## Queue in Linear Time Complexity

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
console.log(queue.peek());
queue.print();
console.log(queue.dequeue());
queue.print();
```

## Optimized Queue Implementation with Rear and Front Pointers

The previous implementation had a linear time complexity for the `dequeue` operation due to the use of `shift()`, which moves all elements one position left. To optimize this, we use two pointers (**front** and **rear**) to track the first and last elements of the queue. This ensures `dequeue` runs in **constant time O(1)**.

```javascript
class Queue {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.front === this.rear) return null;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items.slice(this.front, this.rear).toString());
  }
}

const queue2 = new Queue();
console.log(queue2.isEmpty());
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
console.log(queue2.size());
console.log(queue2.peek());
queue2.print();
console.log(queue2.dequeue());
queue2.print();
```

### Applications of Queue:
- **Task Scheduling**: Operating systems use queues to manage processes.
- **Data Buffering**: Used in network and IO operations.
- **Graph Algorithms**: BFS algorithm uses a queue.
- **Print Spoolers**: Manages jobs sent to a printer.

By implementing queues efficiently, we can optimize performance in scenarios where data needs to be processed in a sequential manner.

# Queue Implementations in JavaScript

## Queue in Linear Time Complexity

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
console.log(queue.peek());
queue.print();
console.log(queue.dequeue());
queue.print();
```

## Optimized Queue Implementation with Rear and Front Pointers

```javascript
class Queue {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.front === this.rear) return null;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items.slice(this.front, this.rear).toString());
  }
}

const queue2 = new Queue();
console.log(queue2.isEmpty());
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
console.log(queue2.size());
console.log(queue2.peek());
queue2.print();
console.log(queue2.dequeue());
queue2.print();
```
