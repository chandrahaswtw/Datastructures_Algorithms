const binSearch = (arr, ele) => {
    let startIndex = 0;
    let lastIndex =  arr.length;
    while(startIndex < lastIndex){
        let median  = startIndex + Math.floor((lastIndex - startIndex)/2);
        console.log(startIndex, lastIndex);
        if(arr[median] === ele)
        {
            return median;
        }
        else if(arr[median] < ele)
        {
            startIndex = median + 1
        }
        else if(arr[median] > ele)
        {
            lastIndex = median - 1
        }
    }
}

console.log(binSearch([1,2,34,56,788,900,1200], 1200))