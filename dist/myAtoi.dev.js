"use strict";

function myAtoi(str) {
  // Step 1: Trim leading spaces
  str = str.trim();
  if (str.length === 0) return 0; // Step 2: Handle optional sign

  var sign = 1;
  var i = 0;

  if (str[i] === '-') {
    sign = -1;
    i++;
  } else if (str[i] === '+') {
    i++;
  } // Step 3: Convert digits to number


  var num = 0;

  while (i < str.length && str[i] >= '0' && str[i] <= '9') {
    num = num * 10 + (str[i].charCodeAt(0) - '0'.charCodeAt(0));
    i++;
  } // Step 4: Clamp to 32-bit signed integer range


  var INT_MAX = Math.pow(2, 31) - 1;
  var INT_MIN = -Math.pow(2, 31);
  num = num * sign;
  if (num < INT_MIN) return INT_MIN;
  if (num > INT_MAX) return INT_MAX;
  return num;
}

console.log(myAtoi("42")); // 42

console.log(myAtoi("   -42")); // -42

console.log(myAtoi("4193 with words")); // 4193

console.log(myAtoi("words and 987")); // 0

console.log(myAtoi("-91283472332")); // -2147483648 (clamped)