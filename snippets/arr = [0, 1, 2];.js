arr = [0, 1, 2];
console.log(arr);
obj = {
  name: "Nafiur",
  age: 18,
  personilty_type: "ambivert",
  weekly_running: [11, 0, 10, 0, 15, 0, 18],
};

console.log(obj);

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 15));
console.log(sum(7, 9));
substraction = (num2, num1) => {
  return num2 - num1;
};
console.log(substraction(20, 10));

mul = (num1, num2) => {
  return num1 * num2;
};

console.log(mul(4, 3));

//count the char
function countchar(str) {
  //creating an object for tracking the frequency of element
  const hashMap = {};
  console.log(hashMap);
  //looping the input
  const normalizeStr = str.toLowerCase();
  for (let i = 0; i < normalizeStr.length; i++) {
    const char = normalizeStr[i];
    if (char === " ") continue;

    // if (char in hashMap) {
    //   hashMap[char] = hashMap[char] + 1;
    // } else {
    //   hashMap[char] = 1;
    // }
    //alternate ternary 
    char in hashMap ? hashMap[char] = hashMap[char] + 1:hashMap[char] = 1
    //another alternative (logical Or)
    hashMap[char]=(hashMap[char] || 0) + 1
  }
  console.log(hashMap);
  //looping the input

  //check if the element exists on the obj then increment the count

  //
}
countchar("mo jjos");
