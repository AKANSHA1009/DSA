function mostFrequentChar(str) {
    const freqMap = {};
    let maxCount = 0;
    let maxChar = '';
  
    for (let char of str) {
      if (char === ' ') continue; // ignore spaces (optional)
      freqMap[char] = (freqMap[char] || 0) + 1;
  
      if (freqMap[char] > maxCount) {
        maxCount = freqMap[char];
        maxChar = char;
      }
    }
  
    return `Most frequent character: '${maxChar}' occurred ${maxCount} times.`;
  }

  console.log(mostFrequentChar("javascript rocks")); 
// Output: Most frequent character: 's' occurred 2 times.
