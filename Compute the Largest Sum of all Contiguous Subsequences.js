// Given an array of numbers, calculate the largest sum of all possible blocks of consecutive elements within the array. The numbers will be a mix of positive and negative values. If all numbers of the sequence are nonnegative, the answer will be the sum of the entire array. If all numbers in the array are negative, your algorithm should return zero. Similarly, an empty array should result in a zero return from your algorithm.
// largestSum([-1,-2,-3]) == 0
// largestSum([]) == 0
// largestSum([1,2,3]) == 6
// largestSum([31,-41,59,26,-53,58,97,-93,-23,84]) == 187

function largestSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item
        maxSum = Math.max(maxSum, partialSum)
        if (partialSum < 0) {
            partialSum = 0
        }
    }
    return maxSum
}

console.log(largestSum([-1, -2, -3]));
console.log(largestSum([]));
console.log(largestSum([1, 2, 3, 4]));
console.log(largestSum([31, -41, 59, 26, -53, 58, 97, -93, -23, 84]));
