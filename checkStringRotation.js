function isRotation(str1, str2) {
    if (str1.length !== str2.length) return false;
  
    const combined = str1 + str1;
    return combined.includes(str2);
  }

  console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("hello", "llohe"));             // true
console.log(isRotation("hello", "world"));             // false
