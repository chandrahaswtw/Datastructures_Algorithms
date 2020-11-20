const binSearch = (arr, ele) => {
    const search = (firstIndex = 0, lastIndex  = arr.length-1) =>{
        let median =  firstIndex + Math.floor((lastIndex - firstIndex)/2);
        if(arr[median] ===  ele)
        {
            return median;
        } 
        else if(arr[median] > ele)
        {
           return search(firstIndex, median - 1)
        }
        else if(arr[median] < ele)
        {
            return search(median + 1, lastIndex)
        }
    }

    return search()
}

console.log(binSearch([1,2,3,54,78,988,1020], 1020));