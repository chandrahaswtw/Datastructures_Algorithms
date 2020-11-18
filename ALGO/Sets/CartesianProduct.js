var cartesianProduct = (...arr) => {

    const productBy2 = (arr1, arr2) => {
        const mergedArray = [];
        for(let i of arr1){
            for(let j of arr2)
            {
                if(Array.isArray(i))
                {
                    mergedArray.push([...i , j]);
                }
                else
                {
                    mergedArray.push([i,j]);
                }
            }
        }
        return mergedArray;
    }

    let finalMergedArray = arr[0];
    for(let i = 0; i< arr.length - 1; i++){
        finalMergedArray = productBy2(finalMergedArray, arr[i+1]);
    }
    
    console.log(finalMergedArray);
}

cartesianProduct([1,2,3],["red","blue","yellow"], ["a","b","c","d"],[true, false])