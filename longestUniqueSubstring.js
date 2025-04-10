function isUnique(str) {
    const charSet = new Set();
    for (let char of str) {
      if (charSet.has(char)) {
        return false;
      }
      charSet.add(char);
    }
    return true;
  }
  
  function longestUniqueSubstringBruteForce(s) {
    let maxLength = 0;
    let longestSub = "";
  
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        const sub = s.substring(i, j);
        if (isUnique(sub) && sub.length > maxLength) {
          maxLength = sub.length;
          longestSub = sub;
        }
      }
    }
  
    return longestSub;
  }
  
  // 🧪 Test
  const input = "abcabcbb";
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
  