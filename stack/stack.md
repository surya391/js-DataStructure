# Stack Implementation in JavaScript

## What is a Stack?
A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means that the last element added is the first one to be removed.

### Key Characteristics of a Stack:
1. **LIFO Principle** – The last inserted element is the first to be removed.
2. **Push and Pop Operations** – Elements are added using `push()` and removed using `pop()`.
3. **Restricted Access** – Elements can only be accessed from the top.
4. **Memory Efficient** – Uses minimal memory for simple operations.
5. **Time Complexity** – `push()`, `pop()`, and `peek()` operations have **O(1)** time complexity.

## Applications of Stack
Stacks are widely used in various areas of computer science and real-world applications:
1. **Function Call Stack** – Helps manage function calls and recursion in programming languages.
2. **Expression Evaluation** – Used in evaluating postfix and prefix expressions.
3. **Undo/Redo Operations** – Found in text editors and design applications.
4. **Backtracking** – Used in maze-solving, puzzle solving, and algorithms like DFS (Depth-First Search).
5. **Browser History** – Helps navigate backward and forward through visited pages.

## Stack Class Breakdown

### 1. Constructor
```javascript
constructor(){
  this.items = [];
}
```
The `constructor` initializes an empty array to store stack elements.

### 2. push(element)
```javascript
push(element){
  this.items.push(element);
}
```
This method adds an element to the top of the stack.

### 3. pop()
```javascript
pop(){
  if(this.items.length == 0){
    return 'stack is empty';
  }
  return this.items.pop();
}
```
This method removes and returns the top element of the stack. If the stack is empty, it returns a message indicating that the stack is empty.

### 4. peek()
```javascript
peek(){
  if(this.isEmpty()){
    return 'stack is empty';
  }
  return this.items[this.items.length-1];
}
```
This method returns the top element of the stack without removing it. If the stack is empty, it returns an appropriate message.

### 5. isEmpty()
```javascript
isEmpty(){
  return this.items.length === 0;
}
```
This method checks if the stack is empty and returns `true` or `false` accordingly.

### 6. size()
```javascript
size(){
  return this.items.length;
}
```
This method returns the number of elements in the stack.

### 7. print()
```javascript
print(){
  console.log(this.items.toString());
}
```
This method prints the contents of the stack in a readable format.

## Example Usage
```javascript
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size()); // Output: 3
stack.print(); // Output: 10,20,30
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
stack.print(); // Output: 10,20
```
### Summary
- The **push** method adds an item to the stack.
- The **pop** method removes and returns the top item.
- The **peek** method returns the top item without removing it.
- The **isEmpty** method checks if the stack is empty.
- The **size** method returns the number of elements in the stack.
- The **print** method displays the stack's contents.

This implementation ensures efficient stack operations with a time complexity of **O(1)** for push, pop, peek, and size operations.
