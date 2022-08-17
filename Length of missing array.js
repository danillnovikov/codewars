function getLengthOfMissingArray(arrayOfArrays) {
    const lengths = (arrayOfArrays || [])
        .map(a => a ? a.length : 0)
        .sort((a, b) => a - b)

    if (lengths.includes(0)) {
        return 0
    }

    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] + 1 !== lengths[i + 1]) {
            return lengths[i] + 1
        }
    }

    return 0
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])); //3
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])); //2
console.log(getLengthOfMissingArray([
    ['a', 'a', 'a'],
    ['a', 'a'],
    ['a', 'a', 'a', 'a'],
    ['a'],
    ['a', 'a', 'a', 'a', 'a', 'a'],
])); //5
console.log(getLengthOfMissingArray([]));
console.log(getLengthOfMissingArray([[], [1, 2]]));
console.log(getLengthOfMissingArray([[2, 3, 3, 1, 2, 3, 2],
[2, 0, 3],
[2, 3, 1, 2, 4, 3, 3, 1],
[4, 0, 2, 2],
[2, 0, 2, 2, 3, 2, 2, 4, 1, 1, 4, 4],
[2, 3, 2, 4, 1],
[3, 3, 4, 3, 0, 0, 1, 4, 0],
[2, 2, 4, 0, 4, 2, 2, 3, 2, 1],
[4, 1, 2, 0, 2, 4, 2, 4, 2, 3, 4, 3, 0],
[1, 4, 4, 4, 2, 0, 1, 2, 1, 4, 2]])); //6


