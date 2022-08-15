//Даны две строки, которые содержат только буквы от a - z. Ваша задача написать функцию, которая возвращает новую отсортированную (по порядку) строку, которая содержит буквы двух строк, повторяющихся только один раз.
//Например:
//longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"

function longest(str1, str2) {
    let set = new Set(str1);
    for (let elem of str2) {
        set.add(elem);
    }
    return console.log([...set].sort().join(''));

}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")