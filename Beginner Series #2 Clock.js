//Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    return 1000 * (3600 * h + 60 * m + s)
}

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
console.log(past(1, 0, 1));
console.log(past(1, 0, 0));
