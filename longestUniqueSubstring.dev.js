"use strict";

function isUnique(str) {
  var charSet = new Set();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;

      if (charSet.has(_char)) {
        return false;
      }

      charSet.add(_char);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}

function longestUniqueSubstringBruteForce(s) {
  var maxLength = 0;
  var longestSub = "";

  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j <= s.length; j++) {
      var sub = s.substring(i, j);

      if (isUnique(sub) && sub.length > maxLength) {
        maxLength = sub.length;
        longestSub = sub;
      }
    }
  }

  return longestSub;
} // 🧪 Test


var input = "abcabcbb";
console.log("Longest unique substring:", longestUniqueSubstringBruteForce(input)); // Output: "abc"
//   function longestUniqueSubstringOptimized(s) {
//     let start = 0;
//     let maxLength = 0;
//     let longestSub = "";
//     const seen = new Map(); // char → last seen index
//     for (let end = 0; end < s.length; end++) {
//       const char = s[end];
//       // If we've seen the char and it's inside the current window
//       if (seen.has(char) && seen.get(char) >= start) {
//         start = seen.get(char) + 1;
//       }
//       seen.set(char, end); // update last seen index
//       const windowLength = end - start + 1;
//       if (windowLength > maxLength) {
//         maxLength = windowLength;
//         longestSub = s.substring(start, end + 1);
//       }
//     }
//     return longestSub;
//   }
//   // 🧪 Test
//   const input = "abcabcbb";
//   console.log("Longest unique substring (optimized):", longestUniqueSubstringOptimized(input)); // Output: "abc"