//adding sum from an array
//you have been provided with an array of numbers
//return their sum

//Solve 01: using for loop
function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}

console.log(sum([1, 2, 3]));

//Solve 02: using for(i of array)
function add(arr) {
  let result = 0;
  for (let num of arr) {
    result += num;
  }
  return result;
}

console.log(add([1, 2, 3]));
