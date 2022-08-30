// Напишите функцию с двумя параметрами, которая создаёт массив элементов,
// представляющих собой сумму соответствующих элементов заданных массивов.

let array1 = [4, 5, 6];
let array2 = [1, 2, 3, 4, 5];

// 1 способ

// function sumElementsInArray(arr1, arr2) {
//     let array3 = []
//     let length;

//     arr1.length >= arr2.length ? length = arr1.length : length = arr2.length

//     for (let i = 0; i < length; i++) {
//         const a = arr1[i] === undefined ? 0 : arr1[i];
//         const b = arr2[i] === undefined ? 0 : arr2[i];
//         array3.push(a + b)
//     }
//     return array3;
// }
// console.log(sumElementsInArray(array1, array2)); // [5,7,9,4,5]

// 2 способ 

function sumElementsInArray(arr1, arr2) {
    let a = arr1.length >= arr2.length ? arr1 : arr2,
        b = arr1.length < arr2.length ? arr1 : arr2;

    return a.map((item, index) => b[index] ? item + b[index] : item)
}
console.log(sumElementsInArray(array1, array2));





