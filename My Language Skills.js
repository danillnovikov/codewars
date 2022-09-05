function myLanguages(results) {
    let result = [];

    for (let key in results) {
        if (results[key] >= 60) {
            result.push(key);
        }
    }
    return result.sort((a, b) => results[b] - results[a]);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));  // [ 'Ruby', 'Python' ]
console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 }));  // [ 'Dutch', 'Greek', 'Hindi' ]
console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 }));  //[]
