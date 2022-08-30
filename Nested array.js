// Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.

const expand = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? expand(b) : b), []);

console.log(expand([1, [2, [3, [4]]]])); // 1,2,3,4
console.log(expand([1, [2], [3, [[4]]], [5, 6]])); // 1,2,3,4,5,6
