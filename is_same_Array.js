//input: 2 array
//output: is it same (dont consider order of the elements)

//solve 01: complexity (n*m)
function isSame(arr1,arr2){

    if(arr1.length!==arr2.length){
        return false
    }
    for (let i=0;i<arr1.length;i++){
       // console.log(arr1[i])
        //indexOf doc
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
        let index= arr2.indexOf(arr1[i]) 
        if (index===-1){
            return false
        }
        else{
            //splice doc
            //https://www.w3schools.com/jsref/jsref_splice.asp
            arr2.splice(index,1)
        }
        // console.log(i+1,arr2 )
        return true
    }

}

console.log(isSame(['1','2','d'],['1','2','d']))

//solve 02: 
function is_Same(arr1,arr2){

    const hashTable1={}
    const hashTable2={}

    for (let num of arr1){
        hashTable1[num]=(hashTable1[num]|| 0)+1
    }

    //console.log(hashTable1)

    for (let num of arr2){
        hashTable2[num]=(hashTable2[num]|| 0)+1
    }
    //console.log(hashTable2)
    for(let elm in hashTable1){
        if (!elm in hashTable2 || hashTable1[elm]!==hashTable2[elm]){return false}
    }

    return true;        
}

console.log(is_Same(['1','2','d'],['1','2','d']))
