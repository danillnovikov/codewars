// Функция simple, в качестве параметра принимающая строку слов, возвращает длину самого короткого слова.
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

const simple = (str) => Math.min(...str.split(' ').map(item => item.length))

console.log(simple('I love JavaScript and React!'));
