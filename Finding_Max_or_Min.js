//input: array of number
//output: max/min number
Input_array = [1, 5, 9, 23, 9, 3, 6, 8];
function maxim(arr) {
  let max = arr[0];
  for (i in arr) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxim(Input_array));

//Solve02: default function for this
console.log(Math.max(...Input_array));
