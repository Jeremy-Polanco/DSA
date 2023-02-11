/*** Coding Exercise 4: Frequency Counter / Multiple Pointers - areThereDuplicates ***/

// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. You can solve this using
// the frequency counter pattern OR the multiple pointers pattern.

// frequencyCounter
const areThereDuplicates = (...args) => {
  // initialize a variable which is going to store the frequency of the letters

  let argsFrequency = {};

  // loop trough the array and sum when a variable is repeated

  for (const key of args) {
    argsFrequency[key] = ++argsFrequency[key] || 1;
    console.log(argsFrequency);

    // return true if it find a occurrence
    if (argsFrequency[key] >= 2) {
      return true;
    }
  }

  // return false if it gets to this point
  return false;
};

// multiple pointers

const areThereDuplicates = (...args) => {
  //initialize two pointes one at the beginning of the array, and other one at the 1st index

  let first = 0;
  let second = 1;

  // loop trough the array and if the first and the second are the same return true
  while (second < args.length) {
    if (args[first] === args[second]) return true;

    first++;
    second++;

    // if the first or the second are not the same add one to both of them
  }

  // return false, if it gets to this point
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // false

// Restrictions:
//     Time - O(N)
//     Space - O(N)
// Bonus:
//     Time - O(N LOG N)
//     Space - O(1)
