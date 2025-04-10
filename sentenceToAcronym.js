function toAcronym(sentence) {
    const words = sentence.trim().split(/\s+/); // split on one or more spaces
    let acronym = "";
  
    for (let word of words) {
      if (word.length > 0) {
        acronym += word[0].toUpperCase();
      }
    }
  
    return acronym;
  }
  console.log(toAcronym("Portable Network Graphics")); // Output: "PNG"
  console.log(toAcronym("random access memory"));      // Output: "RAM"
  console.log(toAcronym("  National Aeronautics and Space Administration  ")); // Output: "NASA"

  

  //brute force
//   function toAcronymBruteForce(sentence) {
//     let acronym = "";
//     let i = 0;
  
//     // Skip leading spaces
//     while (i < sentence.length && sentence[i] === ' ') {
//       i++;
//     }
  
//     // First character of the first word (if any)
//     if (i < sentence.length && sentence[i] !== ' ') {
//       acronym += sentence[i].toUpperCase();
//     }
  
//     // Scan through the sentence character by character
//     for (; i < sentence.length; i++) {
//       // If the current character is a space and the next is a letter, it's a word boundary
//       if (sentence[i] === ' ' && i + 1 < sentence.length && sentence[i + 1] !== ' ') {
//         acronym += sentence[i + 1].toUpperCase();
//       }
//     }
  
//     return acronym;
//   }
//   console.log(toAcronymBruteForce("central processing unit")); // Output: "CPU"
//   console.log(toAcronymBruteForce("  random access memory"));  // Output: "RAM"
//   console.log(toAcronymBruteForce("National Aeronautics and Space Administration")); // Output: "NASA"
    