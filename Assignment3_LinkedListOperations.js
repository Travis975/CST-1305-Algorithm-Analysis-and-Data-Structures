// In order to create a linked list
// We have to create a node first
// Using the classes made from the privious assignment
class Node {
    constructor(data) {
        this.data = data; // Data on that node
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode; // Updating the new Node to the head
        this.size++; // Increment the size
    }

    append(data) {
        // First mamke the new node
        let newNode = new Node(data);
        // Check for empty list
        if (!this.head) {
            this.head = newNode;
        } 
        else {
            // Get to the end of the list to append
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        // Lastly increment the size of the linked list  
        this.size++;
    }

    printList() {
        let current = this.head;
        let str = '';
        while(current !== null) {
            str = str + current.data + ' -> ';
            current = current.next;
        }

        console.log(str + ' null ');
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let newNode = new Node(data);
        if (index === 0) {
            this.prepend(); // If the index is 0, prepend it.
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode;
    }

    removeLast() {
        // Again first check if the list is empty 
        if (!this.head) {
            return null;
        }
        // If the list has one node
        if (!this.head.next) {
            let removedNode = this.head;
            this.head = null;
            this.size--;
            return removedNode.data;
        }

        // Else get to the end of the list and remove the last node
        // and decrement the length of the list 
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
        return current.data;
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;

        return current.data;
    }

    search(data) {
        let current = this.head;

        while (!current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    updateAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.data = data; // Update the data that we want.

    }
}

// =============================================== Assignment 3 ===============================================
// Try to solve these 2 problems and submit the solution

// 1.) Merge Two Sorted Linked Lists (ASSIGNMENT)
//     Ex. 1 -> 3 -> 5 and 2 -> 4 -> 6 should become 1 -> 2 -> 3 -> 4 -> 5 -> 6

// 2.) Delete the N-th Node from the End (ASSIGNMENT)
//     Ex. 1 -> 2 -> 3 -> 4 -> 5 and n = 2 , should return 1 -> 2 -> 3 -> 5

// 1.) Create the function to merge lists
function mergeTwoSortedLists(list1, list2) {
    // Create a temporary Node 
    let tempNode = new Node(0);  
    // Make another variable to keep track and set current to the temp node
    let current = tempNode;     

    // Traverse both lists
    while (list1 !== null && list2 !== null) {
        if (list1.data < list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Append remaining nodes
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }
    // Return the merged list node
    return tempNode.next; 
}
// =============================================== Question 1 Test ===============================================
// Test the function with the example linked lists
let linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(3);
linkedList1.append(5);

let linkedList2 = new LinkedList();
linkedList2.append(2);
linkedList2.append(4);
linkedList2.append(6);

// Print out the original lists
console.log("List 1:");
linkedList1.printList();

console.log("List 2:");
linkedList2.printList();

// Make the merged linked list of the sorted lists
let mergedHead = mergeTwoSortedLists(linkedList1.head, linkedList2.head);
let mergedLinkedList = new LinkedList();
mergedLinkedList.head = mergedHead;

// Print out the merged list
console.log("Merged List:");
mergedLinkedList.printList();

// 2.) Create the function to remove the Nth node
function deleteNthFromEnd(head, n) {
    let tempNode = new Node(0);
    tempNode.next = head;
    let first = tempNode;
    let second = tempNode;

    // Move first ahead by n+1 steps
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until first reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // second.next is the node to be deleted
    second.next = second.next.next;

    // Return the head of the modified list
    return tempNode.next;
}

// A function to accept an integer and return the ordinal value of the number
// Made this to to have a cleaner output message
function integerToOrdinal(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        return 'Input is not a valid integer';
    }
    // Set a default for the suffix
    let suffix = 'th';
    // Check for what n is too assign the right suffix
    if (n % 100 < 11 || n % 100 > 13) {
        // If the number ends with a 1,2,3 then apply the right suffix
        switch (n % 10) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
        }
    }
    // return the ordinal number
    return n + suffix;
} 
// =============================================== Question 2 Test ===============================================
// Test the function with the example linked list
let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

// Print out the original list
console.log("Original List:");
linkedList.printList();

// Declare the Nth variable
let n = 2;
linkedList.head = deleteNthFromEnd(linkedList.head, n);

// Print out the updated list
console.log(`List after deleting ${integerToOrdinal(n)} node from the end:`);
linkedList.printList();