// Without Repetitions

// Theory : Idea is to split the array as
// [a,b,c,d,e]
// [b,c,d,e] => a is out
// [c,d,e] => b is out
// [d,e] => c is out
// [e] => d is out
// In the end when it's reduced to minimum, we take possibilites with d and e => [d,e],[e,d] and we take it up
// Now the element c will combine with array that's returned i.e., [d,e],[e,d] 

function getPermutations(options) {
  options = [...options];
  if (options.length === 1) {
    return [options];
  }

  const ele = options[0];
  const permutedArray = getPermutations(options.slice(1));
  const permutation = [];

  for (let i = 0; i < permutedArray.length; i++) {
    const partialPermutation = permutedArray[i];
    for (let j = 0; j <= partialPermutation.length; j++) {
      permutation.push([...partialPermutation.slice(0, j), ele, ...partialPermutation.slice(j)])
    }
  }

  return permutation;
}

const todoListItems = [
  'a',
  'b',
  'c',
];

console.log(getPermutations(todoListItems).length);
