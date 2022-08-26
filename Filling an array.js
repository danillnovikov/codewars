//Filling an array (part 1)
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

const arr = (n) => {
    let arr1 = [];
    for (let i = 0; i <= n - 1; i++) {
        arr1.push(i);
    }
    return arr1;
};

console.log(arr(5));
console.log(arr(4));
