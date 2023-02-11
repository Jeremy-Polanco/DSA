/*** Multiple Pointers - averagePair ***/

// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the
// target average. There may be more than one pair that matches the average

const averagePair = (arr, targetAverage) => {
  // initialize a variable that contains the reference for the first pointer
  let rightPointer = 0;
  let leftPointer = arr.length - 1;
  let tempAverage = 0;
  // loop trough the array with the two pointers one will begin at the left of the array, and the other one 's going to be at the end
  while (rightPointer < leftPointer) {
    tempAverage = (arr[rightPointer] + arr[leftPointer]) / 2;

    // if the average of the pair is greater than the targetAverage, subtract one from the pointer in the right, if it's lower than the targetAverage, add one to the first pointer, if the targetAverage is the same that the tempAverage  return true,
    if (tempAverage < targetAverage) {
      rightPointer++;
    } else if (tempAverage > targetAverage) {
      leftPointer--;
    } else if (tempAverage === targetAverage) {
      return true;
    }
  }

  // return false if the function gets to this point
  return false;
};

// Bonus Contrains:
// Time: O(N)
// Space: O(1)
// Sample Input:
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
