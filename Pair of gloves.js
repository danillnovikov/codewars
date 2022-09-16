function numberOfPairs(gloves) {
    let arr = gloves.slice().sort((a, b) => a.localeCompare(b));
    let pair = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            pair++;
            i++
        }
    }

    return pair
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]));
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]));