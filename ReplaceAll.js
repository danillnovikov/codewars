// Напишите функцию replaceAll(find, replace, str), которая заменяет в строке str все вхождение подстроки find на подстроку replace.

let str = 'abc def def lom abc abc def';

// function replaceAll(find, replace, str) {
//     while (str.indexOf(find) > -1) {
//         str = str.replace(find, replace);
//     }
//     return str;
// }
// console.log(replaceAll('abc', 'x', str));


//2 способ

const replaceAll = (find, replace, str) => str.replace(new RegExp(find, 'gi'), replace)

console.log(replaceAll('abc', 'x', str));



