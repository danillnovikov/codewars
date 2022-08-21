//In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

function wave(str) {
    let newArr = []
    for (let i = 0; i < str.length; i++) {
        let arr = str.split('')
        if (arr[i] !== ' ') {
            arr[i] = arr[i].toUpperCase();
            newArr.push(arr.join(''))
        }

    }
    return newArr;
}
console.log(wave('hello')); //  ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
