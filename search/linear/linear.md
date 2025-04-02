## Linear Search in JavaScript

### What is Linear Search?
Linear Search is a simple searching algorithm that checks every element in a list sequentially until it finds the target value or reaches the end of the list.

- Start at the first element in the array and move towards the last.

- At each element, check if the element is equal to the target element.

- If the element is found, return the index of the element.

- If the element is not found, return -1.

### Implementation in JavaScript
```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
}

// Example usage
const numbers = [10, 20, 30, 40, 50];
console.log(linearSearch(numbers, 30)); // Output: 2
console.log(linearSearch(numbers, 60)); // Output: -1
```

### Big-O Complexity Analysis
- **Best Case (O(1))**: The target element is found at the first position.
- **Worst Case (O(n))**: The target element is at the last position or not in the array.
- **Average Case (O(n))**: The target element is somewhere in the middle.

### When to Use Linear Search?
- When the list is small.
- When the list is unsorted.
- When searching in linked lists where random access is not possible.

### Pros & Cons
✅ **Advantages:**
- Simple and easy to implement.
- Works on both sorted and unsorted arrays.

❌ **Disadvantages:**
- Slow for large datasets.
- Inefficient compared to other searching algorithms like Binary Search for sorted arrays.

