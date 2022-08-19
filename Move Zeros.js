// Напишите функцию, которая принимает массив и переносит все 0 в конец, не изменяя порядок остальных элементов массива.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let newArr = arr.filter((item) => item !== 0);
  return newArr.concat(Array(arr.length - newArr.length).fill(0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
