function solution(str) {
    let result = []
    let arr = str.split('')

    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i + 1]) {
            result.push(arr[i] + arr[i + 1])
        } else {
            result.push(arr[i] + '_')

        }
    }

    return result
}

console.log(solution('abc'));    // ['ab', 'c_']
console.log(solution('abcdef')); // ['ab', 'cd', 'ef']