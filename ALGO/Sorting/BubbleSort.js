const bubbleSort = (arr) => {
    arr = [...arr];
    for(let i = 0; i< arr.length; i++)
    {
        for(let j= i+1; j< arr.length; j++)
        {
            if(arr[i] > arr[j])
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,-5,0,100,34,22,19,-10]));


