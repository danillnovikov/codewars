// Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.
// Если функции передана правильная строка PIN, верните true, иначе верните false.

// Например:
// correctPin('5567') --> true
// correctPin('5432567') --> false

function correctPin(str) {
    return (str.length == 4 || str.length == 6) && !isNaN(str) ? true : false;
}

console.log(correctPin('5567')); //true
console.log(correctPin('5432567')); //false
console.log(correctPin('f543')); //false
