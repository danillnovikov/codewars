function productArray(numbers) {
    return numbers.map(item => numbers.reduce((prev, curr) => prev * curr) / item)
}

console.log(productArray([3, 27, 4, 2]));  //[216,24,162,324]