//Write a problem that prints  from 1 to 100.
//But for multiples of three print "Fizz" instead of the number
// and for multiples of five print "BUZZ".
// For numbers which are Multiples of both three and five prints "FizzBuzz"

function fizzBuzz(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    //console.log(i)
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz \n";
      //console.log("fizzBuzz")
    } else if (i % 3 === 0) {
      result += "Fizz \n";
      //console.log("Fizz")
    } else if (i % 5 === 0) {
      result += "Buzz \n";
      //console.log("Buzz")
    } else {
      //console.log(i)
      result += i + "\n";
    }
  }
  return result;
}

console.log(fizzBuzz(100));

