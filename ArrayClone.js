//Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал.

function arrayClone(arr) {
  let newArr = arr.slice();
  console.log(newArr);
  newArr.push('Свекла');
  console.log(newArr);
  console.log(arr);
}

arrayClone(['Капуста', 'Репа', 'Редиска']);
