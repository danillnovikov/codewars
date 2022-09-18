function deepCount(arr) {

    return arr.reduce((a, b) => a + (Array.isArray(b) ? deepCount(b) : 0), arr.length);
}

console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));