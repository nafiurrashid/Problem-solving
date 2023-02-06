// input: Number (eg:15)
// output: reversed number (eg:51)


function reverseInt(num){
    let reverseNum=num.toString().split('').reverse().join('')
    if (reverseNum.endsWith('-')){
        reverseNum = '-'+reverseNum.slice(0,reverseNum.length-1)
    }
    
    return Number(reverseNum)  
}
reverseInt(-90)