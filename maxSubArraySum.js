/*** Sliding Window - maxSubarraySum ***/

// Given an array of integers and a number, write a function called maxSubArraySum,
// which finds the maximum sum of a subarray with the length of the number passed
// to the function. Note that a subarray consist of consecutive elements from the
// original array. In the first example below, [100, 200, 300] is a subarray of the
// original array, but [100,300] is not.
const maxSubarraySum = (arr, num) => {
  if (arr.length <= num) {
    return null;
  }

  // initialize a result variable, where the max number is going to be stored, and also is the variable that is going to be returned
  let maxSum = 0;

  // Do an initial loop to get the first sum, which is going to be depending of the length of the given num,

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  // loop trough the arr, sum the numbers beginning in the num is value as a the first index
  for (let j = num; j <= arr.length - num + 1; j++) {
    // sum the value that is ahead of the iteration, and subtract  the first number of the current max sum, and assign it's value to a tempSum variable
    tempSum = tempSum - arr[j - num] + arr[j];

    // if the tempSum is greater, than the current sum, replace it's value with the temp one,
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  // return the maxSum

  return maxSum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 2)); // null

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)
