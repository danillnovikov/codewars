// Напишите функцию unique_letters(str), которая возвращает строку, оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

function uniqueLetters(str) {
    return str.split('').filter((item, index, array) => array.indexOf(item) === array.lastIndexOf(item)).join('');
};

console.log(uniqueLetters('anaconda'));  // cod