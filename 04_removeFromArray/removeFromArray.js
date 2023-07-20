const removeFromArray = function(arr=[],...rmEle) {
    // argArr=[...arguments];
    // argArr=argArr.slice(1);
    constArrArg=arr.slice(0);
    for(ele of constArrArg){
        for(compEle of rmEle){
            if(ele===compEle)
                arr.splice(arr.indexOf(ele),1);
            else    
                continue;
        }         
    }
    return arr;
};
// removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
