//Write a function that returns a string in which firstname is swapped with last name.


const nameShuffler = (str) => str.split(' ').reverse().join(' ')

console.log(nameShuffler('john McClane')); //"McClane john"
