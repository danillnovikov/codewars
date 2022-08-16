//Напишите функцию, которая переделывает строку из camelCase в snake_case.

function inSnakeCase(str) {
  return str
    .split('')
    .map((item) =>
      item == item.toUpperCase() ? '_' + item.toLowerCase() : item
    )
    .join('');
}

console.log(inSnakeCase('redevCourses'));
