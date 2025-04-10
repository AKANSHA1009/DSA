function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
  
    // Start with the first string as a prefix
    let prefix = strs[0];
  
    for (let i = 1; i < strs.length; i++) {
      // Shrink prefix until it matches the beginning of strs[i]
      while (!strs[i].startsWith(prefix)) {
        prefix = prefix.slice(0, -1);
        if (prefix === "") return "";
      }
    }
  
    return prefix;
  }

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // Output: "inters"
