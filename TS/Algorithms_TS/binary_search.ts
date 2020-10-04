const binary_search = (arr : number[], element : number) : number => {
    let startIndex  = 0;
    let end_index = arr.length - 1;
    let median_index : number = NaN;
    while(startIndex < end_index){
        median_index = startIndex + Math.floor((end_index - startIndex)/2);
        if(arr[median_index] === element)
        {
            return median_index;
        }
        else if(element < arr[median_index])
        {
            end_index = median_index -1;
        }
        else if(element > arr[median_index]){
            startIndex = median_index + 1;
        }
    }
    return median_index;
}

console.log(binary_search([1,2,34,56,89,1000], 1))



