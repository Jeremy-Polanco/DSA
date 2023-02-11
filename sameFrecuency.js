/***    Frequency Counter    ***/

// Write a function called sameFrequency
// Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

const sameFrequency = (num1, num2) => {
  const num1str = num1.toString();
  const num2str = num2.toString();

  let num1FrequencyCounter = {};

  for (const key of num1str) {
    num1FrequencyCounter[key] = ++num1FrequencyCounter[key] || 1;
  }

  console.log(num1FrequencyCounter);

  for (let char of num2str) {
    char = char.toString();
    if (!num1FrequencyCounter[char]) {
      return false;
    }
    num1FrequencyCounter[char] = --num1FrequencyCounter[char];
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
