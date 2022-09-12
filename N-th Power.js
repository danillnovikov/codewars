function index(array, n) {
    if (array[n] === undefined) {
        return -1
    }
    let res = array.find((item, i) => {
        if (i === n) {
            return item
        }
    })
    return Math.pow(res, n)
}

console.log(index([1, 2, 3, 4], 2))
console.log(index([1, 2, 3, 4], 5))