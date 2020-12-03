// Available coins = [100, 50, 20, 10, 5, 2, 1]
// Target value 129
// The best and least no of coins to do so. Output as {1: 0, 2 : 1, 5: 1, 10: 0, 20: 0, 50: 0, 100: 1}

const changeMaking = (arr, target, index, finaleArray) => {

    if(target === 0)
    {
        return finaleArray;
    }

    let quo = Math.floor(target / arr[index]);
    let rem = target % arr[index];

    if(quo > 0){
        finaleArray[arr[index]] = quo;
        target = rem;
        changeMaking(arr, target, index + 1, finaleArray)
    }
    else{
        finaleArray[arr[index]] = 0;
        changeMaking(arr,target,index + 1, finaleArray)
    }
    return finaleArray;
}

const bruteForce = (arr, target) => {
    arr  = [...arr];
    let coinCount = Number.MAX_SAFE_INTEGER;
    let finalChangeMakingObject = {};
    while(arr.length > 0){
        let computedResult = changeMaking(arr,target,0, {});
        let tempCoinCount = 0;
        for(let i in computedResult)
        {
            tempCoinCount += computedResult[i];
        }
        if(tempCoinCount < coinCount)
        {
            coinCount = tempCoinCount;
            finalChangeMakingObject = computedResult;
        }
        arr.splice(0,1)
    }
    return finalChangeMakingObject;
}

var arr = [8,6,5,1];
var target = 11;
var changeMakingObject = bruteForce(arr, target);
console.log(changeMakingObject);


// Brute force is required as with first function alone we get 8 = 1 and 1 = 3 ==> 4 coins.
// We need to eliminate each value and perform the loop again to see the least possible number of coins.