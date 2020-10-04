const linear_search = (arr : number[], element : number) : number => {
    let index  = -1;
    for(let i of arr){
        ++index;
        if(i === element)
        {
            break;
        }
    }
    return index;
}

console.log(linear_search([1,2,34,56,89,1000], 1000))



