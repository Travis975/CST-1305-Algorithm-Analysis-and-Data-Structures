// Question 1: Given an array of strings, group the anagrams together. You can return the answer in any order.
// Example:
//      Input: strs = ["eat","tea","tan","ate","nat","bat"]
//      Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs) {
    const map = new Map();
    strs.forEach(str => {
    // Sort the string to use as a key
    const sortedStr = str.split('').sort().join('');
   
    // If the key is already in the map, push the string to the corresponding array
    if (map.has(sortedStr)) {
    map.get(sortedStr).push(str);
    } else {
    // Otherwise, create a new array with the string
    map.set(sortedStr, [str]);
    }
    });
    // Convert the map values to an array and return
    return Array.from(map.values()).sort();
}

console.log("Question 1.)");
let wordArr = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(wordArr));


// Question 2: Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example:
//      Input: strs = ["flower","flow","flight"]
//      Output: "fl"

function longestCommonPrefix(strs) {
    // Check for empty string
    if (strs.length === 0) return "";

    // Start with the first string as the initial prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {

        // Keep reducing the prefix until it matches the beginning of the current string
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);

            // If the prefix becomes empty, there is no common prefix
            if (prefix === "") return "";
        }
    }
    return prefix;
}

console.log("\nQuestion 2.)");
let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs)); // Output: fl


// Question 3: Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A BST is valid if for every node, all nodes in its left subtree are less than the node’s value, 
// and all nodes in its right subtree are greater than the node’s value.
// Input: root = [2,1,3]
// Output: true

function isValidBST(rootNode) {
    // An empty tree is a valid BST
    if (rootNode === null) return true;

    function validate(node, min = -Infinity, max = Infinity) {
        if(!node) return true;
        if (node.val <= min || node.val >= max) return false;

        return validate(node.left, min, node.val) && validate(node.right, node.val, max);

    }
    return validate(rootNode);
}

console.log("\nQuestion 3.)");
let rootNode = [2,1,3]; // Output: true
console.log(isValidBST(rootNode));

// Question 4 (HARD): Given a non-empty binary tree, find the maximum path sum. A path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path sum is the sum of the node values along the path.

// Example:
//  Input: root = -10
//  Output: 25
// Explanation: The optimal path is -10, 20, 15 with a sum of 25.
//    -10
//    /  \
//   9  20 
//     /  \ 
//    15   7

// class node {
//     constructor(val)
//     {
//     this.value = val;
//     this.leftNode = null;
//     this.rightNode = null;
//     }
//     setLeft(node) {
//         this.leftNode = node;
//     }
//     setRight(node) {
//         this.rightNode = node;
//     }
// }

const root = {
    val: -10,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

function sumOfMaxPath(rootNode) {
    if (rootNode === null) {
        return 0;
    }
    const leftPathSum = rootNode.value + sumOfMaxPath(rootNode.leftNode);
    const rightPathSum = rootNode.value + sumOfMaxPath(rootNode.rightNode);
    return (leftPathSum > rightPathSum) ? leftPathSum : rightPathSum;
}

// Prabhs Method
function maxPathSumFromRootToLeaf(root) {
    if (!root) return 0;

    function maxLeafPathSum(node) {
        if (!node) return 0;
        if (!node.left && !node.right) return node.val;

        const leftMax = maxLeafPathSum(node.left);
        const rightMax = maxLeafPathSum(node.right);

        // console.log("Left max: ", leftMax);
        console.log("Right max: ", rightMax);
        console.log("Node.val: ", node.val);

        return node.val + Math.max(leftMax, rightMax);
    }

    return maxLeafPathSum(root);
}

// Make the BST
// let rootNode = new node(-10);
// let node9 = new node(9);
// let node20 = new node(20);
// let node15 = new node(15);
// let node7 = new node(7);
// rootNode.setLeft(node9);
// rootNode.setRight(node20);
// node20.setLeft(node15);
// node20.setRight(node7);

console.log("\nQueestion 4.)");
// console.log(sumOfMaxPath(root)); // Output: 25
console.log("Prabh's Solution")
console.log(maxPathSumFromRootToLeaf(root)); 


// Question 5: You are given an array prices where prices[i] is the price of a given stock on the i-th day. 
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day 
// in the future to sell that stock. Return the maximum profit you can achieve from this transaction. 
// If you cannot achieve any profit, return 0.

// Example:
// Input: prices = [7,1,5,3,6,4]
// Output: 5 (Buy on day 2 and sell on day 5 for a profit of 6-1 = 5)

function maxProfit(prices) {
    if (prices.length === 0) return 0;

    // Initialize minPrice to a very large value
    let minPrice = Infinity; 
    // Initialize maxProfit to 0
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update minPrice if the current price is lower than the previously recorded minPrice
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        // Calculate profit by selling at the current price
        else {
            let profit = prices[i] - minPrice;
            // Update maxProfit if the current profit is higher than the previously recorded maxProfit
            if (profit > maxProfit) {
                maxProfit = profit;
            }   
        }
    }
    return maxProfit;
}

console.log("\nQuestion 5.)");
let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices)); // Output: 5 (Buy on day 2 and sell on day 5 for a profit of 6-1 = 5)


// Question 6: Given an array, rotate the array to the right by k steps, where k is non-negative.
// Example:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

function rotate(nums, k) {
    const n = nums.length;
    k = k % n;
    if (k === 0) return;

    const part1 = nums.slice(-k);
    const part2 = nums.slice(0, n - k); 
    // See the function in action
    console.log('Part1:', part1);
    console.log('Part2:', part2);
    console.log('Before splice:', nums);

    // Combine all the parts
    nums.splice(0,n,...part1,...part2);

    // Print result
    console.log('After splice:', nums);
}

// console.log("\nQuestion 6.)");
// let numsArr = [1,2,3,4,5,6,7]
// let k = 3;
// console.log("Input Array: ", numsArr);
// console.log("\nIn rotate function:")
// rotate(numsArr, k);




