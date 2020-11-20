const linearSearch = (arr, ele) => {
    let index = 0;
    for(let i of arr)
    {
        if(i === ele)
        {
            return index;
        }
        index++;
    }
}

console.log(linearSearch([1,2,3,54,78,988,1020], 1020));