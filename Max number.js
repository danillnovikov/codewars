// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. 
// Дробные числа разрешены.


function findMaxNumber(a, b, c, d) {
    let arr = [a, b, c, d];

    for (let i = 0; i < arr.length; i++) {

        if (arr.length < 4 || typeof arr[i] !== 'number') {
            return 0
        }
    }

    arr.sort((a, b) => a - b);

    return arr[arr.length - 1]

}

console.log(findMaxNumber(1, 5, 6.6, 3,));
console.log(findMaxNumber(1, 5, '6', '10'));

//Так же можно через Math.max(a,b,c,d)