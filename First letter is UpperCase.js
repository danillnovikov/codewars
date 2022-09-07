


const toJadenCase = (str) => str.split(' ').map((item, index) => item[0].toUpperCase() + item.slice(1)).join(' ')

console.log(toJadenCase('The world is not what we think it is')); //The World Is Not What We Think It Is
