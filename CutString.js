// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

let str = 'Сила тяжести приложена к центру масс тела';

function cutString(str, n) {
    return str.split(' ').slice(0, n).join(' ')
}

console.log(cutString(str, 5));
