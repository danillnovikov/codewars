// Дан массив слов, необходимо определить, составлены ли все слова из одних и тех же символов. 
// Функцию реализовать как принимающую переменное число аргументов.

function sameWords(arr) {
    let firstWord = arr[0].split('').sort().join('');

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].split('').sort().join('') !== firstWord) {
            return false;
        } else {
            return true;
        }

    }
}

console.log(sameWords(["кот", "ток", "кто"])); //true
console.log(sameWords(["кот", "тк", "кТо"]));  //false