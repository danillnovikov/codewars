//Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const comparison = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

// console.log(comparison('string', 'StRiNg')); //true
// console.log(comparison('ABCDe', 'AbcdW'));  //false


function comparison(str1, str2) {
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();
    return a.localeCompare(b)
}

console.log(comparison('string', 'StRiNg')); //0
console.log(comparison('ABCDe', 'AbcdW'));  //-1

