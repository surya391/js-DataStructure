# Linked List Implementation in JavaScript

## Overview
A linked list is a linear data structure where elements (nodes) are linked using pointers. Each node contains a value and a reference (or pointer) to the next node in the sequence. Unlike arrays, linked lists allow dynamic memory allocation and efficient insertion/deletion operations.

This JavaScript implementation defines a `LinkedList` class with various operations such as insertion, deletion, searching, reversing, and printing the list. The linked list consists of `Node` objects, each holding a `value` and a reference (`next`) to the next node.

---

## Advantages of Linked Lists
- **Dynamic Size:** Unlike arrays, linked lists do not require predefined sizes.
- **Efficient Insertions/Deletions:** Adding or removing elements does not require shifting elements like arrays.
- **Memory Utilization:** No wasted memory due to pre-allocation; memory is allocated as needed.

## Disadvantages of Linked Lists
- **Extra Memory Usage:** Each node requires additional memory for storing the pointer to the next node.
- **Sequential Access:** Unlike arrays, linked lists do not provide direct (random) access to elements.
- **Overhead in Traversal:** Searching for an element requires traversing from the head node.

---

## Node Class
```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```
- Represents a single node in the linked list.
- Stores a `value`.
- `next` initially set to `null`, indicating no next node.

---

## LinkedList Class
```js
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
```
- `head`: Points to the first node in the list.
- `size`: Tracks the number of elements in the list.

---

## Utility Methods
### `isEmpty()`
```js
isEmpty() {
  return this.size == 0;
}
```
- Returns `true` if the list is empty, otherwise `false`.

### `getSize()`
```js
getSize() {
  return this.size;
}
```
- Returns the number of elements in the list.

---

## Insertion Methods
### `prepend(value)`
```js
prepend(value) {
  const node = new Node(value);
  if (this.isEmpty()) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  this.size++;
}
```
- Inserts a new node at the beginning of the list.

### `insert(value, index)`
```js
insert(value, index) {
  if (index < 0 || index > this.size) {
    return;
  }
  if (index === 0) {
    this.prepend(value);
  } else {
    const node = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    node.next = prev.next;
    prev.next = node;
    this.size++;
  }
}
```
- Inserts a node at a specified position in the list.

### `append(value)`
```js
append(value) {
  const node = new Node(value);
  if (this.isEmpty()) {
    this.head = node;
  } else {
    let prev = this.head;
    while (prev.next) {
      prev = prev.next;
    }
    prev.next = node;
  }
  this.size++;
}
```
- Adds a new node at the end of the list.

---

## Deletion Methods
### `removeFrom(index)`
```js
removeFrom(index) {
  if (index < 0 || index >= this.size) {
    return null;
  }
  let removedNode;
  if (index === 0) {
    removedNode = this.head;
    this.head = this.head.next;
  } else {
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    removedNode = prev.next;
    prev.next = removedNode.next;
  }
  this.size--;
  return removedNode.value;
}
```
- Removes a node at a given index.

### `removeValue(value)`
```js
removeValue(value) {
  if (this.isEmpty()) {
    return null;
  }
  if (this.head.value === value) {
    this.head = this.head.next;
    this.size--;
    return value;
  } else {
    let prev = this.head;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }
    if (prev.next) {
      const removeNode = prev.next;
      prev.next = removeNode.next;
      this.size--;
      return value;
    }
    return null;
  }
}
```
- Removes a node by value.

---

## Search Method
### `search(value)`
```js
search(value) {
  if (this.isEmpty()) {
    return -1;
  }
  let i = 0;
  let curr = this.head;
  while (curr) {
    if (curr.value === value) {
      return i;
    }
    curr = curr.next;
    i++;
  }
  return -1;
}
```
- Searches for a value and returns its index, or `-1` if not found.

---

## Reversal Method
### `reverse()`
```js
reverse() {
  let prev = null;
  let curr = this.head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  this.head = prev;
}
```
- Reverses the linked list.

---

## Print Method
### `print()`
```js
print() {
  if (this.isEmpty()) {
    console.log("List is empty");
  } else {
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} -> `;
      curr = curr.next;
    }
    console.log(listValues.slice(0, -4)); // Removes last " -> "
  }
}
```
- Displays the linked list values in order.

---

## Conclusion
This implementation provides essential linked list functionalities, including insertion, deletion, searching, reversing, and printing. The `reverse()` method allows in-place reversal, demonstrating the flexibility of linked lists. Despite some drawbacks, linked lists are widely used in scenarios requiring dynamic memory allocation and efficient insertions/deletions.

