//input: string
//output: number

function vowels(str) {
  let count = 0;
  const all_Vowels = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (all_Vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(vowels("jksdcskjjadeeeeee5544fdfgdfxxzddddd"));
