function compressString(str) {
    if (str.length === 0) return "";
  
    let compressed = "";
    let count = 1;
  
    for (let i = 1; i <= str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        compressed += str[i - 1] + count;
        count = 1;
      }
    }
  
    return compressed;
  }

  console.log(compressString("aaabbccccd")); // Output: "a3b2c4d1"
console.log(compressString("abcd"));       // Output: "a1b1c1d1"
