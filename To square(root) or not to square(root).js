function squareOrSquareRoot(array) {
    return array.map(item => {
        if (Number.isInteger(Math.sqrt(item))) {
            return Math.sqrt(item)
        } else {
            return Math.pow(item, 2)
        }
    })
}



// const squareOrSquareRoot = (array) => array.map(item => Number.isInteger(Math.sqrt(item) ? Math.sqrt(item) : Math.pow(item, 2)))

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); //[ 2, 9, 3, 49, 4, 1 ]
