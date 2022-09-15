// Напишите функцию startsWith(), которая определяет, начинается ли строка символами другой строки, возвращая, соотвественно, true или false.

let str = 'abc def ghi jkl mno pqr stu';

String.prototype.startsWith = function (start) {
    let reg = new RegExp('^' + start, 'g')
    return reg.test(str)
};

console.log(str.startsWith('abc'));