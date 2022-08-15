// Напишите функцию, которая возвращает минимальное и максимальное значение заданного массива.

// function maxAndMinValue(arr) {
//     return console.log([Math.min.apply(null, arr), Math.max.apply(null, arr)]);
// }

const maxAndMinValue = (arr) => console.log([Math.min.apply(null, arr), Math.max.apply(null, arr)]);

maxAndMinValue([1, 5, 8, 10, 35, 100])
maxAndMinValue([-5, -7, -2, 5])

