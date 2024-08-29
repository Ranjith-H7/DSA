function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    console.log(`value-->${value}`);
    total = ( total+value) % arrayLen;
    console.log(`total----->${total}`)
  }
  return total;
}

const result = hash("z",10);
console.log(result);