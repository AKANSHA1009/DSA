"use strict";

function mostFrequentChar(str) {
  var freqMap = {};
  var maxCount = 0;
  var maxChar = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;
      if (_char === ' ') continue; // ignore spaces (optional)

      freqMap[_char] = (freqMap[_char] || 0) + 1;

      if (freqMap[_char] > maxCount) {
        maxCount = freqMap[_char];
        maxChar = _char;
      }
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

  return "Most frequent character: '".concat(maxChar, "' occurred ").concat(maxCount, " times.");
}

console.log(mostFrequentChar("javascript rocks")); // Output: Most frequent character: 's' occurred 2 times.