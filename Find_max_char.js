//input: a string
// output: most used char
function maxChar(str){
    const hashMap= {}
    let max =0;
    let maxChar=''
    for(let char of str){
        hashMap[char] =(hashMap[char]|| 0) +1
    }
    for (let char in str){
        if(hashMap[char]>max){
            max= hashMap[char]
            maxChar=char
        }
        
    }
    console.log(max,maxChar)


    return maxChar

}
console.log(maxChar('qqerybkdabkdabddddddd'))