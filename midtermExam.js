// // Question1: Find the missing number in a unsorted
// // array whose value is upto n. For example if n is 5,
// // the array will be
// // Let array = [5, 4,1,2 ] , here the number missing is
// // 3, so you have to find that number. Note: there can
// // be no negative number in the array, and the array
// // always starts with 1.
// // Another example - If n is 10 ,
// // Let array = [9, 5, 3, 2,6, 1, 7, 8, 10], here the
// // missing number is 4.

// // TEST CASES
// // array = [5, 4, 1, 2]
// // n = 5
// // # Expected output: 3
// // array = [9, 5, 3, 2, 6, 1, 7, 8, 10]
// // n = 10
// // # Expected output: 4
// // array = [2, 3, 1, 5]
// // n = 5
// // # Expected output: 4


// // The time complexity for the function should be O(n). As it just depends on the length of the array and what n is. 
// function findMissingNumber(array, n) {
//     // Returns missing number
//     // Find the sum of everything from 1 to n
//     let totalSumOfN = 0;
//     for (let i = 1; i <= n; i++) {
//         totalSumOfN += i;
//     }

//     // Then get the total value of everything in the array
//     let sumOfArr = array.reduce((acc, num) => acc + num, 0);
//     // Then substract the sum of the array from the totalSumOfN
//     // The difference would be the missing number
//     return totalSumOfN - sumOfArr;
// }
// // The time complexity for this function should be O(nlogn) due to sorting the array first before looping through it
// function findMissingNumber2(array, n) {
//     // Sort the array from least to greatest
//     array.sort((a, b) => a - b);

//     // Check for the missing number
//     for (let i = 0; i < n - 1; i++) {
//         // Loop through the array and compare numbers side by side
//         // If the difference is greater than 1 you know a number is out of order so return the missing number
//         if (array[i + 1] - array[i] !== 1) {
//             return array[i] + 1;
//         }
//     }

//     // Edge case: If the missing number is the smallest or largest number n. 
//     if (array[0] !== 1) {
//         return 1;
//     } 
//     else {
//         return n;
//     }
// }


// // Test Cases
// let arr1 = [5, 4, 1, 2]; // Missing number is 3
// // n = 5
// let arr2 = [9, 5, 3, 2, 6, 1, 7, 8, 10] // Missing number is 4
// // n = 10

// console.log("Question 1:");
// console.log("Missing number from arr1: " + findMissingNumber(arr1, 5));
// console.log("Missing number from arr2: " + findMissingNumber(arr2, 10));

// console.log("Missing number from arr1: " + findMissingNumber2(arr1, 5));
// console.log("Missing number from arr2: " + findMissingNumber2(arr2, 10));

// // =============================================================================================================================

// // Question2: Given an array of integers nums and an
// // integer target, return the indices of the two
// // numbers such that they add up to the target.
// // You may assume that each input would have exactly
// // one solution, and you may not use the same
// // element twice.
// // For example - Let array = [1, 5, 2, 7] , target = 8 , so
// // you have to return [0, 3]
// // Another example - Let array = [20, 1, 5, 2, 11 ],
// // target = 3, so you have to return [1, 3]

// // TEST CASES
// // array = [1, 5, 2, 7]
// // target = 8
// // # Expected output: [0, 3]
// // array = [20, 1, 5, 2, 11]
// // target = 3
// // # Expected output: [1, 3]
// // array = [3, 2, 4]
// // target = 6
// // # Expected output: [1, 2]

// // The time complexity for this function will be O(n) as well as it just need to loop through an array
// // once and update an object accordingly 
// function sumOfTwoNums(nums, target) {
//     // Object to store the value and its index
//     let numsSeen = {};
    
//     for (let i = 0; i < nums.length; i++) {
//         // Find the complement of the current number
//         let complement = target - nums[i];
        
//         // Check if the complement is already in the object,then return the two indices
//         if (numsSeen.hasOwnProperty(complement)) {
//             return [numsSeen[complement], i];
//         }
//         else {
//             // Otherwise, add the current number and its index to the object
//             numsSeen[nums[i]] = i;
//         }
//     }
// }

// // Test Cases
// console.log("Question 2:")
// let array1 = [1, 5, 2, 7];
// let target1 = 8;
// console.log(sumOfTwoNums(array1, target1));  // Output: [0, 3]

// let array2 = [20, 1, 5, 2, 11];
// let target2 = 3;
// console.log(sumOfTwoNums(array2, target2));  // Output: [1, 3]


// // ============================================================================================================================

// // Question3: Generate All Permutations of a
// // String
// // Given a string str, write a recursive function to
// // generate all permutations of the string.
// // // Input: "ABC"
// // // Output: ["ABC", "ACB", "BAC", "BCA", "CAB",
// // "CBA"]

// // TEST CASES:
// // let input = "AB";
// // Expected Output: ["AB", "BA"]
// // let input = "A";
// // Expected Output: ["A"]
// // Let input = “ABC”;
// // Expected Output: ["ABC", "ACB", "BAC", "BCA",
// // "CAB", "CBA"]

// // Time Complexity: O(n * n!);
// function permute(str){ 
//     const results = [];
//     // FILO - (First In, Last Out)
//     const stack = [{ current: "", remaining: str}];

//     while (stack.length > 0) {
//         const { current , remaining } = stack.pop(); // "", "ABC"

//         if (remaining.length === 0) {
//             results.push(current);
//         } else {
//             for (let i = 0 ; i  < remaining.length; i++) {
//                 const firstCharacter = remaining[i]; // "B"
//                 const remainingCharacters = remaining.slice(0, i) + remaining.slice(i + 1); // "BC";
//                 stack.push({ current: current + firstCharacter, remaining: remainingCharacters})
//             }
//         }
//     }

//     return results.sort();
// }
// console.log("Question 3:")
// console.log(permute("AB"));
// console.log(permute("ABC"));



// // function generatePermutation(str) {
// //     // Return array of combinations
// // }

// // ==========================================================================================================================
// // Question4: Given a linked list, determine if it has
// // a cycle in it. If it has a cycle return true otherwise
// // return false. In this solution you have to write a
// // function like

// // Function checkIfCycleExists(headNode) {
// //     // Return true or false.
// // }
// // Note: You can create a linked list by yourself just like
// // we did in class, and then pass the head node for
// // testing your solution.

// // TEST CASES:
// // headNode = "A";
// // Linked List = “A” -> “B” -> “C” -> “A”
// // Expected Output: true
// // headNode = "1";
// // Linked List = “1” -> “2” -> “3” -> null
// // Expected Output: false
// // headNode = "1";
// // Linked List = “1” -> “2” -> “3” -> 1
// // Expected Output: true

// // The time complexity for the function using floyd's algorithm is O(n^2).As it has to traverse the entire list.
// function checkIfCycleExists(headNode) {
//     // Return true or false.
//     if (!headNode || !headNode.next) {
//         return false; // return false if not the head
//     }
//     let slow = headNode;
//     let fast = headNode;

//     while( fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if(slow === fast) {
//             return true; // As a cycle has been detected
//         }
//     }
//     return false; // If no cycles found then return false 
// }

// class Node {
//     constructor(data) {
//         this.data = data; // Data on that node
//         this.next = null; // Pointer to the next node
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     prepend(data) {
//         let newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode; // Updating the new Node to the head
//         this.size++; // Increment the size
//     }

//     append(data) {
//         // First mamke the new node
//         let newNode = new Node(data);
//         // Check for empty list
//         if (!this.head) {
//             this.head = newNode;
//         } 
//         else {
//             // Get to the end of the list to append
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//         // Lastly increment the size of the linked list  
//         this.size++;
//     }

//     printList() {
//         let current = this.head;
//         let str = '';
//         while(current !== null) {
//             str = str + current.data + ' -> ';
//             current = current.next;
//         }

//         console.log(str + ' null ');
//     }

//     insertAt(data, index) {
//         if (index < 0 || index > this.size) {
//             return null; // Out of bounds
//         }

//         let newNode = new Node(data);
//         if (index === 0) {
//             this.prepend(); // If the index is 0, prepend it.
//         }

//         let current = this.head;
//         let previous;
//         let count = 0;

//         while (count < index) {
//             previous = current;
//             current = current.next;
//             count++;
//         }

//         newNode.next = current;
//         previous.next = newNode;
//         this.size++;
//     }

//     removeFirst() {
//         if (!this.head) {
//             return null;
//         }

//         let removedNode = this.head;
//         this.head = this.head.next;
//         this.size--;
//         return removedNode;
//     }

//     removeLast() {
//         // Again first check if the list is empty 
//         if (!this.head) {
//             return null;
//         }
//         // If the list has one node
//         if (!this.head.next) {
//             let removedNode = this.head;
//             this.head = null;
//             this.size--;
//             return removedNode.data;
//         }

//         // Else get to the end of the list and remove the last node
//         // and decrement the length of the list 
//         let current = this.head;
//         let previous = null;
//         while (current.next) {
//             previous = current;
//             current = current.next;
//         }
//         previous.next = null;
//         this.size--;
//         return current.data;
//     }

//     removeAt(index) {
//         if (index < 0 || index > this.size) {
//             return null; // Out of bounds
//         }

//         if (index === 0) {
//             return this.removeFirst();
//         }

//         let current = this.head;
//         let previous;
//         let count = 0;

//         while (count < index) {
//             previous = current;
//             current = current.next;
//             count++;
//         }

//         previous.next = current.next;
//         this.size--;

//         return current.data;
//     }

//     search(data) {
//         let current = this.head;

//         while (!current) {
//             if (current.data === data) {
//                 return true;
//             }
//             current = current.next;
//         }

//         return false;
//     }

//     updateAt(data, index) {
//         if (index < 0 || index > this.size) {
//             return null; // Out of bounds
//         }

//         let current = this.head;
//         let count = 0;

//         while (count < index) {
//             current = current.next;
//             count++;
//         }

//         current.data = data; // Update the data that we want.

//     }
// }
// // Test Case
// let linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.append(5);

// console.log("Question 4: " + checkIfCycleExists(linkedList.head));

// // ============================================================================================================================
// // Question5: Given a string containing just the
// // characters '(', ')', '{', '}', '[' and
// // ']', determine if the input string is valid.
// // An input string is valid if:
// // ● Open brackets must be closed by the same
// // type of brackets.
// // ● Open brackets must be closed in the correct
// // order.
// // ● An empty string is also considered valid.

// // TEST CASES:
// // str = "()";
// // Expected Output: true
// // str = "(){}[ ]";
// // Expected Output: true
// // Str = “([})”
// // Expected Output: false
// // Str = “[({})]”
// // Expected Output: true

// // The time complexity for this solution will be O(n). As it is just one for loop going through the length of the string.
// // So it just depends on the length of the input string.
// function checkIfValidParenthesis(str) {
//     // return true or false
//     let stack = [];
//     let mappings = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };
//     // Compare the characters in the string if they are in the mapping
//     for (let char of str) {
//         if (mappings[char]) {           
//             stack.push(mappings[char]); 
//         }
//         else { 
//             // If the last element from the stack does not match the char then it is false                        
//             if (char !== stack.pop()) { 
//                 return false;           
//             }
//         }
//     }

//     return stack.length === 0; // If stack is empty, all brackets matched then true
// }

// // Test Cases
// let str1 = "{}[]()";
// let str2 = "[}{)";

// console.log("Question 5.")
// console.log(str1 + ": " + checkIfValidParenthesis(str1));
// console.log(str2 + ": " + checkIfValidParenthesis(str2));


// class node {
//     constructor(val)
//     {
//         this.value = val;
//         this.leftNode = null;
//         this.rightNode = null;
//     }
//     setLeft(node)
//     {
//         this.leftNode = node;
//     }
//     setRight(node)
//     {
//         this.rightNode = node;
//     }
// }

// let rootNode = new node(-10);
// let node9 = new node(9);
// let node20 = new node(20);
// let node15 = new node(15);
// let node7 = new node(7);

// rootNode.setLeft(node9);
// rootNode.setRight(node20);

// node20.setLeft(node15);
// node20.setRight(node7);

// function sumOfMaxPath(rootNode)
// {
//     if (rootNode === null)
//     {
//         return 0;
//     }

//     const leftPathSum = rootNode.value + sumOfMaxPath(rootNode.leftNode);
//     const rightPathSum = rootNode.value + sumOfMaxPath(rootNode.rightNode);

//     return (leftPathSum > rightPathSum) ? leftPathSum : rightPathSum;
// }

// console.log(sumOfMaxPath(rootNode));

