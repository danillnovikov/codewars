// Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами.
//  Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.

function colonOdd(num) {

    return num.toString().split('').map((item, ind, arr) => {
        if (arr[ind] % 2 == 1 && arr[ind + 1] % 2 == 1) {
            return item + ':'
        } else {
            return item
        }
    }).join('');

}

console.log(colonOdd(55639217));
