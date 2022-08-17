//In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

function sortByArea(array) {
    return [...array].sort((a, b) => (typeof a == 'number' ? Math.PI * a ** 2 : a[0] * a[1]) -
        (typeof b == 'number' ? Math.PI * b ** 2 : b[0] * b[1]))
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]));

