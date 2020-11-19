// Without Repetitions

// Theory : 

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
