//For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

function findMultiples(integer, limit) {
    let arr = []
    for (let i = integer; i <= limit; i++) {
        if (i % integer == 0) {
            arr.push(i)
        }
    }
    return arr
}
console.log(findMultiples(5, 26));   // [5, 10, 15, 20, 25])
console.log(findMultiples(11, 54));  // [11, 22, 33, 44]

