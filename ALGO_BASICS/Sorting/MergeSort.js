const mergeSort = (arr) => {
    arr = [...arr];
    let median = Math.floor(arr.length / 2);
    if (arr.length <= 1) {
        return arr;
    }
    if (arr.length === 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }
    let leftArray = arr.slice(0, median);
    let rightArray = arr.slice(median);
    let sortedLeftArray = mergeSort(leftArray);
    let sortedRightArray = mergeSort(rightArray);
    console.log(sortedLeftArray, sortedRightArray);
    let leftIndex = 0;
    let rightIndex = 0;
    let mergedArray = [];
    while (leftIndex < sortedLeftArray.length || rightIndex < sortedRightArray.length) {
        if (sortedRightArray.length <= rightIndex || (sortedLeftArray[leftIndex] < sortedRightArray[rightIndex])) {
            mergedArray.push(sortedLeftArray[leftIndex]);
            leftIndex++;
        }
        else {
            mergedArray.push(sortedRightArray[rightIndex]);
            rightIndex++;
        }
    }

    return mergedArray;
}

console.log(mergeSort([5, -5, 0, 100, 34, 22, 19, -10]));