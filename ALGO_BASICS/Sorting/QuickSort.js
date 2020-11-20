const quickSort = (arr) => {
    arr = [...arr];
    if(arr.length <= 1)
    {
        return arr;
    }
    let leftArray = [];
    let centerArray = [];
    let rightArray = [];
    let pivotElement =  arr.shift();
    centerArray.push(pivotElement);

    while(arr.length){
        let compareElement = arr.shift();
        if(compareElement === pivotElement){
            centerArray.push(compareElement);
        }
        else if(compareElement > pivotElement)
        {
            rightArray.push(compareElement);
        }
        else {
            leftArray.push(compareElement);
        }
    }

    let sortedLeftArray = quickSort(leftArray);
    let sortedRightArray = quickSort(rightArray);
    return [...sortedLeftArray, ...centerArray, ...sortedRightArray];
}

console.log(quickSort([5,-5,0,100,34,22,19,-10]));

