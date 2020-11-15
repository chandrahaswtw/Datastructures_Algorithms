const binSearch = (arr,ele,offset = 0) => {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;
    let median = Math.floor((lastIndex - firstIndex)/2);
    let index;
    if(arr[median] === ele)
    {
       index = offset + median; 
       return index;
    }
    else if(arr[median] > ele)
    {
        lastIndex = median - 1
    }
    else if(arr[median] < ele)
    {
        firstIndex = median + 1;
        offset = offset + median + 1
    }   

    let newArr =  arr.slice(firstIndex, lastIndex + 1);
    return binSearch(newArr, ele, offset)

}

console.log(binSearch([1,2,3,54,78,988,1020], 1020));