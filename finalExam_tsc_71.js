// Question1: Reverse an Integer (5 MARKS)
// Given an integer x, return the integer obtained by reversing the digits
// of x.
// If its a negative number , the sign should preserve
// Test Case 1: Positive Number
    // ● Input: x = 123
    // ● Expected Output: 321
    // ● Explanation: The digits of 123 are reversed to 321.
// Test Case 2: Negative Number
    // ● Input: x = -456
    // ● Expected Output: -654

function flipNumber(x) {
    if (x === 0) return 0;
    if (x < 0) {
        x = x + '';
        let sign = x[0];
        xAsText = x.split('').reverse().join('');
        xAsInt = parseInt(sign + xAsText);
        return xAsInt;
    } 
    x = x + '';
    xAsText = x.split('').reverse().join('');
    xAsInt = parseInt(xAsText);
    return xAsText;
}
let testPosInt = 123;
let testNegInt = -456;

console.log("Question 1:");
console.log("Inputs", testPosInt, testNegInt);
console.log("\nAfter Flipping:")
console.log(flipNumber(testPosInt));
console.log(flipNumber(testNegInt));

// Question 2: Given a sorted array of distinct integers and a target
// value, return the index if the target is found. If not, return the index
// where it would be if it were inserted in order.( 5 MARKS)
// Test Case 1: Target is in the array
    // ● Input: nums = [1, 3, 5, 6], target = 5
    // ● Expected Output: 2
    // ● Explanation: The target 5 is found at index 2.
// Test Case 2: Target is not in the array (insert position in
// between)
    // ● Input: nums = [1, 3, 5, 6], target = 2
    // ● Expected Output: 1
    // ● Explanation: The target 2 is not found, but it would be inserted
    // at index 1.

function findIndex(arr, target) {
    if(arr.length === 0) return 0;
    for (let i = 0; i < arr.length; i++) {
        // If target is in the array
        if(arr[i] === target) {
            return i;
        }
        // If the target is not in the array
        if (arr[i] < target && arr[i + 1] > target) {
            return i + 1
        }
    }
}
console.log("\nQuestion 2:");
let testArr = [1,3,5,6];
let testTarget = 5; 
let testTarget2 = 2;
console.log("Test Array: ", testArr);
console.log("When target is 5, the index is:");
console.log(findIndex(testArr, testTarget)); 
console.log("\nWhen target is 2, the index is:");
console.log(findIndex(testArr, testTarget2));


// Question3: Delete Node in a Linked List (5 MARKS)
// Write a function to delete a node (except the tail) in a singly
// linked list, given only access to that node.
// Test Case 1: Basic Deletion
    // ● Input:
    // ○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
    // ○ Node to delete: 5
    // ● Output:
    // ○ Linked List: 4, where linked list should become 4 -> 1 -> 9
// Test Case 2: Basic Deletion
    // ● Input:
    // ○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
    // ○ Node to delete: 4
    // ● Output:
    // ○ Linked List: 5, where linked list should become 5 -> 1 -> 9


class Node {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
}
       
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Method to add a node at the end of the list
    add(value) {
    const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
   

    // Method to remove a node from a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
        return console.log('Invalid index');
    }
    let current = this.head;
    let previous;
    let count = 0;
    // Remove the head
    if (index === 0) {
        this.head = current.next;
    } 
    else {
        while (count < index) {
        previous = current;
        current = current.next;
        count++;
        }
        previous.next = current.next;
    }

    this.size--;
    return current.value;
    
    }

    // Method to print the list
    printList() {
    let current = this.head;
    let listValues = '';
        while (current) {
            listValues += current.value + ' ';
            current = current.next;
        }
        console.log(listValues.trim());
    }
   
   
}

const orignalList = new LinkedList();
orignalList.add(4);
orignalList.add(5);
orignalList.add(1);
orignalList.add(9);   

const copyList = new LinkedList();
copyList.add(4);
copyList.add(5);
copyList.add(1);
copyList.add(9);

console.log("\nQuestion 3: Part 1");
console.log("Input List:");
orignalList.printList(); // Output: 4 -> 5 -> 1 -> 9
orignalList.removeAt(1); // Delete the 5 from the second index
console.log("Output List:");
orignalList.printList(); // Output: 4 -> 1 -> 9

console.log("\nQuestion 3: Part 2");
console.log("Input List:");
copyList.printList(); // Output: 4 -> 5 -> 1 -> 9
copyList.removeAt(0); // Delete the 4 from the first index
console.log("Output List:");
copyList.printList(); // Output: 5 -> 1 -> 9


// Question4: Find all the duplicates in an array and return which
// is the smallest one. (5 MARKS)
// Test Case 1:
    // Input:
    // ○ Given array: [4, 10, 5, 1, 11, 5, 1, 4, 1]
    // ● Output:
    // ○ 1
// Test Case 2:
    // Input:
    // ○ Given array: [1, 10, 1, -1, 10, -1]
    // ● Output:
    // ○ -1

function findLowestValueDuplicate(arr) {
    numberMap = {};
    isNegative = false;
    lowestDuplicate = 0;

    for (num of arr) {
        if (!numberMap[num])
            numberMap[num] = 1;
        else {
            if (num < 0) isNegative = true
            numberMap[num]++;
        }
    }

    for (key in numberMap) {
        if (numberMap[key] > 1) {
            if (!isNegative)
                return key;
            else
                lowestDuplicate = key;
        }
    }

    return lowestDuplicate;
}

console.log("\nQuestion 4:")
let q5Arr = [4, 10, 5, 1, 11, 5, 1, 4, 1];
let q5Arr2 = [1, 10, 1, -1, 10, -1];
console.log("First Array: ", q5Arr);
console.log("Lowest value duplicate from first array: ", findLowestValueDuplicate(q5Arr));
console.log("\nSecond Array: ", q5Arr2);
console.log("Lowest value duplicate from second array: ", findLowestValueDuplicate(q5Arr2));



// MULTIPLE CHOICE QUESTIONS 

// Which type of search is efficient on a sorted array?
// ● A) Linear Search
// ● B) Binary Search
// ● C) Hash Search
// ● D) Exponential Search

// The answer is B, Binary Search.

// What is the time complexity of inserting a new node at the
// beginning of a singly linked list?
// ● A) O(1)
// ● B) O(n)
// ● C) O(log n)
// ● D) O(n log n)

// The answer is B, O(n).

// In a binary search tree (BST), the left child of a node is always:
// ● A) Greater than the node
// ● B) Smaller than the node
// ● C) Equal to the node
// ● D) Random compared to the node

// The answer is B, smaller than the parent node.

// Which traversal of a BST visits nodes in ascending order?
// ● A) Pre-order
// ● B) Post-order
// ● C) In-order
// ● D) Level-order

// The answer is C, In-order traversal

// In a doubly linked list, what does the prev pointer in the first
// node point to?
// ● A) The last node
// ● B) Null
// ● C) The second node
// ● D) The middle node

// The answer is B, Null.



    