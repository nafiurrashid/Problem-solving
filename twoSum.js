
function twoSum(nums, target){
     for(let i=0;i<nums.length;i++){
         for(let j=i+1;j<nums.length;j++){
            //console.log(i,j)
            if(nums[i]+ nums[j]===target){
                return[i,j]
            }
             
         }
}

}

console.log(twoSum([3,3],6))

// solve 02
//solve 02
//remember we only need the index not the value
function two_Sum(nums, target){
    const hashTable={}
    //for of diye index pabo na eijonno raw for loop use korchi
    for(let i=0;i<nums.length;i++){
        //determine the value 'wanted' to reach the tarhet
        const wanted =target-nums[i]
        //check if the value in the hash table
        if(wanted in hashTable){
            // index of  wanted and i 
            return [hashTable[wanted],i] 
        }
         //whose wanted value not found in hashTable, index of it is store in hashtable
         hashTable[nums[i]]=i 
        
    }
   
}
console.log(two_Sum([3,4,2,7,33],6))