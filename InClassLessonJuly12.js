class BinaryTreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let parentNode = new BinaryTreeNode(1);
let child1 = new BinaryTreeNode(2);
let child2 = new BinaryTreeNode(3);
let subChild1 = new BinaryTreeNode(4);
let subChild2 = new BinaryTreeNode(5);

parentNode.left = child1;
parentNode.right = child2;
child1.left = subChild1;
child1.right = subChild2;

function preOrderTraversal(rootNode) {
    if (!rootNode) {
        return;
    }
    
    // explore the root
    console.log(rootNode.value);
    // explore the left
    preOrderTraversal(rootNode.left);
    // explore the right 
    preOrderTraversal(rootNode.right);
}
console.log("Pre-Order Traversal")
preOrderTraversal(parentNode);

function inOrderTraversal(rootNode) {
    if (!rootNode) {
        return;
    }
    // explore the left
    inOrderTraversal(rootNode.left);
    // explore the root
    console.log(rootNode.value);
    // explore the right 
    inOrderTraversal(rootNode.right);

}
console.log("In-Order Traversal");
inOrderTraversal(parentNode);

function postOrderTraversal(rootNode) {
    if (!rootNode) {
        return;
    }
    // explore the left
    postOrderTraversal(rootNode.left);
    // explore the right
    postOrderTraversal(rootNode.right);
    // explore the root
    console.log(rootNode.value);
}
console.log("Post-Order Traversal")
postOrderTraversal(parentNode);

function levelOrderTraversal(rootNode) {
    if (!rootNode) return;

    // we will make use of a queue
    const queue = [rootNode];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
}

console.log("Level Order Traversal");
levelOrderTraversal(parentNode);

class BinaryTree {
    constructor() {
        this.root = null;
    }
}

// Questions
// 1.) Search for a node in a binary tree
// 2.) Count the amount of nodes in a binary tree
// 3.) Find the height of the binary tree (How many Levels starting at 0).


//1.) Search Tree
function searchForNode(rootNode, target) {
    if (!rootNode) {
        return false;
    }
    
    // explore the root
    if (rootNode.value === target) {
        return true;
    }
    // explore the left
    searchForNode(rootNode.left, target);
    // explore the right 
    searchForNode(rootNode.right, target);

    //One liner
    // return (searchForNode(rootNode.left, target) ||  searchForNode(rootNode.right, target));
}

// 2.) Count Nodes
function countNodes(rootNode) {
    if (rootNode === null) {
        return 0;
    }
    else{
        return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
    }
}
console.log("Count of the Nodes: ");
const Count = countNodes(parentNode);
console.log(Count);

// 3.) Find how many levels

function getHeight(rootNode) {
    if(rootNode === null) {
        return 0;
    }
    else {
        const leftHeight = getHeight(rootNode.left);
        const rightHeight = getHeight(rootNode.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
console.log("Get Height of a tree")
const height = getHeight(parentNode);
console.log(height);