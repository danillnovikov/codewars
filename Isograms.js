


function isIsogram(str) {
    let arr = str.toUpperCase().split('').sort()

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return false
        }
    }
    return true
}
console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('aba'));  // false
console.log(isIsogram('moOse'));  //false