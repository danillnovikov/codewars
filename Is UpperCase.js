// Напишите функцию isUpperCase(str, character), которая определяет, в каком регистре написан символ строки в указанной позиции.
// Если он написан в верхнем регистре - возвращать true, если в нижнем – false.

const isUpperCase = (str, character) => str[character].toUpperCase() === str[character]

console.log(isUpperCase('tasks JavaScript', 6)); // true
