var quickSort = (arr) => {
  let leftArray = [];
  let pivot = [arr[0]];
  let rightArray = [];

  if (arr.length <= 1) {
    return arr;
  }

  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArray.push(arr[i]);
      } else if (arr[i] > pivot) {
        rightArray.push(arr[i]);
      }
      if (arr[i] === pivot) {
        pivot.push(arr[i]);
      }
    }
  }

  leftArray = quickSort(leftArray);
  rightArray = quickSort(rightArray);

  return [...leftArray, ...pivot, ...rightArray];
};

console.log(quickSort([-3, 10, 1, 100, -10, 22, 15]));
