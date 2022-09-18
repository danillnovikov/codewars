function sumStrings(a, b) {

    let result = BigInt(a) + BigInt(b)

    return result.toString()

}
console.log(sumStrings('123', '456')); // '579'
