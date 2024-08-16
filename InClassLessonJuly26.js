// Solve the following questions in as many ways as possible

// 1.) Given an array check if it has duplicates or not
// 2.) Given an array, see which number is repeated the most
// 3.) Find the Kth largest value in the array. (Without sorting)
// 4.) Find the Kth largest value in the array. (With sorting)
// 5.) 

// 1.) Question 1
// Given an array check if it has duplicates or not
console.log("Question 1");

// Input Array
let numArr = [2,4,1,2,4];


function findDuplicatesUsingSet(arr) {
    const values = new Set();

    for(let i = 0; i < arr.length; i++) {
        values.add(arr[i]);
    }
    // if (values.length === arr.length) return true;
    return values.length === arr.length;
    
    // return false;
}
// Expected Output: false
console.log(findDuplicatesUsingSet(numArr));

// Question 2
//  Given an array, see which number is repeated the most
console.log("Question 2");

// Input Array
let repeatedNumArr = [2,4,1,2,4,4,4,6,8,9];

// Expected Output
// The most repeated number is 4



// Question 3
// Find the kth largest value in the array. (Without sorting)
// Try in recursion.
console.log("Question 3");

// Input Array
let bigNumArr = [3,5,7,9,22,55,637,1,4,99,8];

// With Recursion 
function findKthLargestNumber(arr, k) {
    if (k === 1) {
        return Math.max(...arr);
    }

    const maxVal = Math.max(...arr);
    const indexValue = arr.indexOf(maxVal);
    arr.splice(indexValue, 1);

    return findKthLargestNumber(arr, k - 1);
}
// Expected Output: 99
console.log(findKthLargestNumber(bigNumArr, 2));





