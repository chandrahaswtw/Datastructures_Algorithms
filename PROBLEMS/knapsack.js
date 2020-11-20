//PROBLEM STATEMENT
// Take an array:
// [
//     {id : 'a', val = 3, weight = 3},
//     {id : 'b', val = 6, weight = 8},
//     {id : 'c', val = 10, weight = 3}
// ]
// Write a program that MAXIMIZES the VALUE of ITEMS you put into a bag whilst
// ensuring that you don't exceed the MAXIMUM WEIGHT which is 8 in this case

const knapsack = (options, maxWeight) => {
    let possibleWeightCombo = [];
    for (let i = 0; i < options.length; i++) {
        let netWeight = 0;
        let newCombo = [];
        for (j = i; j < options.length; j++) {
            if (netWeight > maxWeight) {
                break;
            }

            if (options[j].weight < maxWeight) {
                var sumValue = newCombo.reduce((acc, cur) => { return (acc + cur.val) }, 0)
                if (sumValue <= 8) {
                    newCombo.push(options[j]);
                    netWeight += options[j].weight
                }
            }
        }

        let oldValue = possibleWeightCombo.reduce((acc, cur) => { return (acc + cur.val) }, 0)
        let newValue = newCombo.reduce((acc, cur) => { return (acc + cur.val) }, 0)
     
        if(newValue > oldValue)
        {
            possibleWeightCombo = newCombo
        }
    }

    console.log(possibleWeightCombo);

}

knapsack(
    [
        { id: 'a', val: 3, weight: 3 },
        { id: 'b', val: 6, weight: 8 },
        { id: 'c', val: 10, weight: 3 },
        { id: 'd', val: 100, weight: 7 },
    ], 8
)