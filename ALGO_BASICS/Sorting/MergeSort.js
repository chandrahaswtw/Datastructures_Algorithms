var mergeSort = (arr) => {
    let median = Math.floor(arr.length / 2);
    let leftArray = arr.slice(0, median);
    let rightArray = arr.slice(median);
  
    if (arr.length <= 1) {
      return arr;
    }
  
    if (arr.length === 2) {
      return arr[1] > arr[0] ? [arr[0], arr[1]] : [arr[1], arr[0]];
    }
  
    let leftSortedArray = mergeSort(leftArray);
    let rightSortedArray = mergeSort(rightArray);
    let sortedMergedArray = [];
  
    //   We are calculating the length to avoid the calculation each time.
    let leftArrayLength = leftSortedArray.length;
    let rightArrayLength = rightSortedArray.length;
    let index = Math.min(leftArrayLength, rightArrayLength);
  
    //   We are slicing out the extra array which will be appended at the last
    extraArray =
      leftArrayLength > rightArrayLength
        ? leftSortedArray.slice(rightArrayLength)
        : rightSortedArray.slice(leftArrayLength);
    if (leftArrayLength === rightArrayLength) {
      extraArray = [];
    }
  
    //   We are only looping till the index (min of both lengths)
    for (let i = 0; i < index; i++) {
      if (leftSortedArray[i] > rightSortedArray[i]) {
        sortedMergedArray = [
          ...sortedMergedArray,
          rightSortedArray[i],
          leftSortedArray[i],
        ];
      } else {
        sortedMergedArray = [
          ...sortedMergedArray,
          leftSortedArray[i],
          rightSortedArray[i],
        ];
      }
    }
  
    //   Finally we merge both sorted array and extra array
    return [...sortedMergedArray, ...extraArray];
  };
  
  console.log(mergeSort([-3, 10, 1, 100, -10, 22, 15]));
  