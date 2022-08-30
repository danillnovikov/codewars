// Напишите функцию, которая проверит, является ли строка палиндромом.

const palindrome = (str) => str.toLowerCase().split('').join('') === str.toLowerCase().split('').reverse().join('')

console.log(palindrome('Шалаш'));
console.log(palindrome('мама'));
console.log(palindrome('топот'));