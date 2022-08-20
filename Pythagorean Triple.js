function isPythagoreanTriple(integers) {
    let a = integers[0]
    let b = integers[1]
    let c = integers[2]

    if (c ** 2 == a ** 2 + b ** 2) {
        return true
    } else {
        return false
    }

}

console.log(isPythagoreanTriple([2448, 2160, 1152]));