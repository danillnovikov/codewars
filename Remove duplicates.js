// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr.

let arr = [
    'php',
    'php',
    'css',
    'css',
    'script',
    'script',
    'html',
    'html',
    'java',
];

// function removeDuplicates(arr) {

//     return [... new Set(arr)];
// }

console.log(removeDuplicates(arr)); // [ 'php', 'css', 'script', 'html', 'java' ]

// 2 cпособ

function removeDuplicates(arr) {
    let newArr = [];

    arr.forEach(item => {
        if (newArr.indexOf(item) < 0) {
            newArr.push(item)
        }
    })
    return newArr
}

