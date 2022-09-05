const factorial = (n) => n !== 1 ? n * factorial(n - 1) : 1
console.log(factorial(5)); //120
console.log(factorial(4)); //24
console.log(factorial(6)); //720