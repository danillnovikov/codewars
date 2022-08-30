// Что такое анаграмма?
// Два слова являются анаграммами между собой, если они оба содержат одинаковые буквы.
// Например: 'abba' & 'baab' == true
// Напишите функцию, которая находит все анаграммы слова из списка. В качестве параметра даны слово и массив слов.
// Функция должна возвращать массив всех анаграмм или пустой массив, если анаграмм не обнаружено.

function anagrams(word, array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].split('').sort().join('') === word.split('').sort().join('')) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']
