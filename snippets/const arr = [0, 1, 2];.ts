const arr = [0, 1, 2];
console.log(arr);
const obj = {
  name: "Nafiur",
  age: 18,
  personilty_type: "ambivert",
  weekly_running: [11, 0, 10, 0, 15, 0, 18],
};

console.log(obj);


function add (num1 , num2 ){ 
    return (num1 + num2);
}
console.log(add(10,15))
console.log(add(7,9))

const substraction=(num2,num1) => {
    return num2-num1
}
console.log(substraction(20,10))

const mul=(num1,num2)=>{
    return num1*num2 
}

console.log(mul(4,3))

function countcharacter(str: String){
//assign a hashmap
const hashMap={}
//make everything lowerCase
const normalizeStr =str.toLowerCase()

//looping the input
    for (let i=0;i<normalizeStr.length;i++){
        //const char=normalizeStr[i]
        if (normalizeStr[i] === ' ') continue
        if(normalizeStr[i] in hashMap){
            hashMap[normalizeStr[i]]=hashMap[normalizeStr[i]]+1
        }
        else{
            hashMap[normalizeStr[i]]=1
        }
    }

    console.log(hashMap)
}

 console.log(countcharacter('mo   jo'))
