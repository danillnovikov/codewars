//1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
// (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку
//  "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
// Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
// Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
// Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.


function getTimeFromMinutes(n) {
    let hours = Math.floor(n / 60)
    let minutes = n % 60;

    if (typeof (n) !== 'number' || !Number.isInteger(n) || n < 0) {
        return 'Ошибка, проверьте данные!'
    }

    if (hours === 0 || hours >= 5) {
        return `Это ${hours} часов и ${minutes} минут`
    }

    if (hours >= 2 && hours <= 4) {
        return `Это ${hours} часа и ${minutes} минут`
    }

    if (hours === 1) {
        return `Это ${hours} час и ${minutes} минут`
    }

}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(600));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));
console.log(getTimeFromMinutes(10.1));


function findMaxNumber() {

}

// console.log(100 % 60);