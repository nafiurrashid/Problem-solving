//input: an array, chunk size
//output: a sub array of the "chunk size"

function chunked(arr,size){
    const chunkedarr=[]
    for (let elm of arr){
        //mark the last element
        const last =chunkedarr[chunkedarr.length-1]
       
        if (last && last.length<size){
             // if last one is less than the size then push it to the 'last' array
            last.push(elm)
            //push it for sub array
            
        } else{ 
            //else push the sub array to output array
            chunkedarr.push([elm])
        }  
    } 
    return chunkedarr
}

console.log(chunked([1,2,3,4,5,6],2))



//slove 02
//input: an array, chunk size
//output: a sub array of the "chunk size"

function chunk(arr,size){
    const chunked =[]
    let index =0
    while(index<arr.length){
        const slicedArr= arr.slice(index,index+size)
        chunked.push(slicedArr)
        index+=size
    }
     
    return chunked
}

console.log(chunk([1,2,3,4,5],2))