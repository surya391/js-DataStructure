# Binary Search Algorithm

## Introduction
Binary Search is an efficient algorithm for finding an element in a **sorted array**. It follows the **divide and conquer** approach, reducing the problem size by half in each step.

## Algorithm
1. Set two pointers: **left** (beginning of the array) and **right** (end of the array).
2. Find the **middle index** using:
   ```math
   middle = \lfloor \frac{left + right}{2} \rfloor
   ```
3. Compare the **middle element** with the target:
   - If it matches, return the index.
   - If the target is smaller, search in the **left half**.
   - If the target is larger, search in the **right half**.
4. Repeat the process until the element is found or the search space is empty.

## Time Complexity
- **Best Case:** \(O(1)\) (if the middle element is the target)
- **Worst/Average Case:** \(O(\log n)\) (dividing search space by half each time)

## Implementation (Recursive)
```javascript
function binarySearch(arr, target, left, right) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
}

function search(arr, target) {
    return binarySearch(arr, target, 0, arr.length - 1);
}
```

## Implementation (Iterative)
```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

## Applications
- Searching in sorted arrays
- Efficiently finding elements in large datasets
- Used in algorithms like **search trees, sorting algorithms, and databases**