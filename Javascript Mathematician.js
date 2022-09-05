

const calculate = (...x) => (...y) => {
    return [].concat(x, y).reduce((a, b) => a + b, 0)
}

console.log(calculate(1)(1)); //2
console.log(calculate(1, 1)(1)); //3
console.log(calculate(1, 1)(1, -1)); //2
console.log(calculate(2, 4)(3, 7, 1)); //17