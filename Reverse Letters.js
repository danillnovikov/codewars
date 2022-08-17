// Напишите функцию, которая принимает строковый параметр и меняет буквы в словах в обратном порядке. 
// Все пробелы в строке должны быть сохранены.
// Например:
// This is an example! -> sihT si na !elpmaxe

const reverseLetters = (str) => str.split(' ').map(item => item.split('').reverse().join('')).join(' ')

console.log(reverseLetters('This is an example!'));