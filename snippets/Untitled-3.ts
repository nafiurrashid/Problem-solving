function countcharacter(str: String) {
    //assign a hashmap
    const hashMap={}
    //make everything lowerCase
    const normalizeStr =str.toLowerCase()
    
    //looping the input
        for (let i=0;i<normalizeStr.length;i++){
            //const char=normalizeStr[i]
            //if (normalizeStr[i] === ' ') continue
            
            hashMap[normalizeStr[i]]=hashMap[normalizeStr[i]]+1
        
        
        }
    
        console.log(hashMap)
    }

countcharacter('mo jo ')

