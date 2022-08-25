// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    return n.toString().split('').map(item => item = Number(item)).reverse()
}

console.log(digitize(35231))  // [1, 3, 2, 5, 3]