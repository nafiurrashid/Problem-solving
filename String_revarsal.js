//input: a string eg: apple
//output: reversed string eg: elppa

//sove 01
function reverse(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    revStr= str[i]
  }
}

reverse("apple");

//solve 02

function reversedString(str) {
  let revStr = "";
  for (let char of str) {
    revStr = char + revStr;
  }

  return revStr;
}

reversedString("apple");
console.log(reversedString("apple"));

//solve 03

function reverse03(str) {
  let b = str.split("").reverse().join("");
  return b;
}

reverse03("apple");
