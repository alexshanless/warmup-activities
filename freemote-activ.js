// Create a string to get initials from a first and last name.

// Must be uppercase and separated with a period (".")

var getInitials = function (name) {
  var newArr = name.split(" ");
  var firstInitial = newArr[0][0];
  var secondinitial = newArr[1][0];
  var newName = `${firstInitial}.${secondinitial}`;

  return newName.toUpperCase();
};

// Given an array of numbers, add together the positive nums & return the sum

// If no numbers are positive, return 0

// var sumOfPositive = (nums) => {};

// console.log(sumOfPositive([1, -2, 3, 4]));

// ✖️ multiplyNumbers
// Given 2 numbers, multiply them WITHOUT THE * OPERATOR!
var multiplyNumbers = function (num1, num2) {
  let sum = 0;
  for (let i = 0; i < num2; i++) {
    sum += num1;
  }
  return sum;
};

// Given a string, duplicate in n times and return a single string

var repeatString = function (s, n) {
  let str = "";
  // your code here
  for (i = 0; i < n; i++) {
    str += s;
  }
  return str;
};

// Given a string, determine whether it is a palindrome (same forwards and backwards, case-sensitive)

var isPalindrome = function (str) {
  // your code here
  let newStr = str.split("").reverse().join("");
  if (newStr === str) {
    return true;
  } else {
    return false;
  }
};

//Given a number, count how many odd numbers are below that number

var countOdd = function (n) {
  // your code here
  Math.floor(n / 2);
};

// Given a number, count how many numbers below it are multiples of 3 and 5

// Then, sum those multiples together

var sumMultiples = function (n) {
  var counter = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      counter += i;
    }
  }

  return counter;
};

// Given an array of positive and negative integers, find the number that does not have an opposite
var unbalancedArray = function (nums) {
  return nums.reduce((sum, num) => sum + num);
};

// Given a string, count the vowels and return that count
var countVowels = function (s) {
  var counter = 0;
  for (var char of s) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      counter++;
    }
  }
  return counter;
};

//Array to object
const tweets = [
  { day: "Monday", text: "Im tired" },
  { day: "Monday", text: "Need Coffee" },
  { day: "Tuesday", text: "Feeling better" },
  { day: "Friday", text: "Ready to party" },
  { day: "Friday", text: "Lost my phone..." },
];

const calendar = {};
for (let tweet of tweets) {
  if (calendar[tweet.day]) {
    calendar[tweet.day].push(tweet.text);
  } else {
    calendar[tweet.day] = [tweet.text];
  }
}
console.log(calendar);
