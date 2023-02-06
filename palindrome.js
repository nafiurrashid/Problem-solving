//input: string 
//non-alphanumeric should be ignored
//output: palindrome or not (true or false)
//"race car => true"

function palindrome(str){
    //[0-9,A-Z,a-z]
    //check regex documentation for more
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
    const re = /[\W_]/g
    const NormalizedStr= str.toLowerCase().replace(re,'')
    const reverseStr=NormalizedStr.split('').reverse().join('')
    console.log(reverseStr)
 
    return NormalizedStr==reverseStr
    
}

console.log(palindrome("race__@*-()    car"))



